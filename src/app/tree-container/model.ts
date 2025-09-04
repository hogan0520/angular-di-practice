import {
  computed,
  inject,
  InjectionToken,
  Signal,
  signal,
} from '@angular/core';

let treeNodeId = 0;

export interface TreeNode {
  readonly treeControl?: TreeControl;
  uuid: string;
}

export interface TreeControl {
  readonly $treeNodesChildren: Signal<TreeNode[]>;
  readonly $treeControlChildren: Signal<TreeControl[]>;
  readonly $expanded: Signal<boolean>;
  readonly $deepExpanded: Signal<boolean>;
  readonly $deepCollapsed: Signal<boolean>;
  toggleExpand(): void;
  registerNode(node: TreeNode): void;
  expandDeep(): void;
  collapseDeep(): void;
}

function isTreeControl(node: TreeNode | TreeControl): node is TreeControl {
  return !!(node as Partial<TreeControl>).$expanded;
}

export const TREE_NODE_TOKEN = new InjectionToken<TreeNode>('Tree Node');
export const TREE_CONTROL_TOKEN = new InjectionToken<TreeControl>(
  'Tree Control'
);

type Constructor = new (...args: any[]) => object;

function mixTreeLeaf<T extends Constructor>(c: T) {
  abstract class TreeLeaf extends c implements TreeNode {
    readonly treeControl = inject(TREE_CONTROL_TOKEN, {
      skipSelf: true,
      optional: false,
    });
    readonly uuid = `${treeNodeId++}`;

    protected constructor(...args: any[]) {
      super(...args);
      this.treeControl.registerNode(this);
    }
  }

  return TreeLeaf;
}

function mixTreeRoot<T extends Constructor>(c: T) {
  abstract class TreeRoot extends c implements TreeControl {
    protected readonly $_expand = signal(false);
    protected readonly $_treeNodes = signal<
      (TreeNode | (TreeNode & TreeControl))[]
    >([]);

    readonly $treeNodesChildren = this.$_treeNodes.asReadonly();
    readonly $treeControlChildren: Signal<TreeControl[]> = computed(() =>
      this.$treeNodesChildren().filter((node) => isTreeControl(node))
    );

    readonly $expanded = this.$_expand.asReadonly();

    readonly $deepExpanded = computed(() => {
      return (
        this.$expanded() &&
        this.$treeControlChildren().every((control: TreeControl) =>
          control.$deepExpanded()
        )
      );
    });

    readonly $deepCollapsed = computed(() => {
      return (
        !this.$expanded() &&
        this.$treeControlChildren().every((control: TreeControl) =>
          control.$deepCollapsed()
        )
      );
    });

    toggleExpand(): void {
      this.$_expand.set(!this.$_expand());
    }

    registerNode(node: TreeNode) {
      this.$_treeNodes.set([...this.$_treeNodes(), node]);
    }

    expandDeep() {
      this.$treeControlChildren().forEach((node: TreeControl) => {
        node.expandDeep();
      });
      this.$_expand.set(true);
    }

    collapseDeep() {
      this.$treeControlChildren().forEach((node: TreeControl) => {
        node.collapseDeep();
      });
      this.$_expand.set(false);
    }
  }

  return TreeRoot;
}

export abstract class TreeRoot extends mixTreeRoot(Object) {}

export abstract class TreeLeaf extends mixTreeLeaf(Object) {}

export abstract class TreeBranch extends mixTreeLeaf(mixTreeRoot(Object)) {}

// export abstract class TreeRoot implements TreeControl {
//   protected readonly $_expand = signal(true);
//   protected readonly $_treeNodes = signal<TreeNode[]>([]);
//
//   readonly $treeNodes = this.$_treeNodes.asReadonly();
//   readonly $expand = this.$_expand.asReadonly();
//
//   toggleExpand(): void {
//     this.$_expand.set(!this.$_expand());
//   }
//   registerNode(node: TreeNode): void {
//     this.$_treeNodes.set([...this.$_treeNodes(), node])
//   }
// }
//
// export abstract class TreeLeaf implements TreeNode {
//   readonly treeControl = inject(TREE_CONTROL_TOKEN, {
//     host: true,
//     optional: false,
//   });
//   readonly uuid = `${treeNodeId++}`;
// }
//
// export abstract class TreeBranch implements TreeNode, TreeControl {
//   protected readonly $_expand = signal(true);
//   protected readonly $_treeNodes = signal<TreeNode[]>([])
//
//   readonly $treeNodes = this.$_treeNodes.asReadonly();
//   readonly $expand = this.$_expand.asReadonly();
//
//   toggleExpand(): void {
//     this.$_expand.set(!this.$_expand())
//   }
//   registerNode(node: TreeNode): void {
//     this.$_treeNodes.set([...this.$_treeNodes(), node])
//   }
//
//   readonly treeControl = inject(TREE_CONTROL_TOKEN, {
//     skipSelf: true,
//     optional: false,
//   });
//   readonly uuid = `${treeNodeId++}`;
// }

export interface Wellbore {
  id: string;
  name: string;
  status: string;
  channels: string[];
}

export interface Channel {
  id: string;
  name: string;
  type: string;
}

export interface Well {
  id: string;
  name: string;
  wellbores: string[];
  channels: string[];
}
