import { Component, forwardRef } from '@angular/core';
import { TREE_CONTROL_TOKEN, TreeRoot, Well } from '../model';
import { httpResource, HttpResourceRef } from '@angular/common/http';
import { TreeWell } from '../tree-well/tree-well';

@Component({
  selector: 'app-tree-data-explorer',
  imports: [TreeWell],
  providers: [
    {
      provide: TREE_CONTROL_TOKEN,
      useExisting: forwardRef(() => TreeDataExplorer),
    },
  ],
  templateUrl: './tree-data-explorer.html',
  styleUrl: './tree-data-explorer.scss',
})
export class TreeDataExplorer extends TreeRoot {
  private readonly wellsResouce: HttpResourceRef<Well[]> = httpResource<Well[]>(
    () => 'api/wells',
    { defaultValue: [] }
  );

  $wells = this.wellsResouce.asReadonly().value;
  $loading = this.wellsResouce.isLoading;
}
