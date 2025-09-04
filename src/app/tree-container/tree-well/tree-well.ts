import { Component, forwardRef, input } from '@angular/core';
import { TREE_CONTROL_TOKEN, TREE_NODE_TOKEN, TreeBranch, Well } from '../model';
import { httpResource } from '@angular/common/http';
import { TreeWellbore } from '../tree-wellbore/tree-wellbore';
import { TreeChannel } from '../tree-channel/tree-channel';

@Component({
  selector: 'app-tree-well',
  imports: [TreeWellbore, TreeChannel],
  providers: [
    { provide: TREE_CONTROL_TOKEN, useExisting: forwardRef(() => TreeWell) },
    { provide: TREE_NODE_TOKEN, useExisting: forwardRef(() => TreeWell) },
  ],
  templateUrl: './tree-well.html',
  styleUrl: './tree-well.scss',
})
export class TreeWell extends TreeBranch {
  readonly $wellId = input.required<string>({ alias: 'wellId' });

  protected readonly wellResource = httpResource<Well>(
    () => `api/wells/${this.$wellId()}`
  );

  readonly $well = this.wellResource.asReadonly().value;
  readonly $loading = this.wellResource.isLoading;
}
