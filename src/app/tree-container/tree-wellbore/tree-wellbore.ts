import { Component, forwardRef, input } from '@angular/core';
import {
  TREE_CONTROL_TOKEN,
  TREE_NODE_TOKEN,
  TreeBranch,
  Wellbore,
} from '../model';
import { httpResource } from '@angular/common/http';
import { TreeChannel } from '../tree-channel/tree-channel';
import { NgClass, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-tree-wellbore',
  imports: [TreeChannel, UpperCasePipe, NgClass],
  providers: [
    {
      provide: TREE_CONTROL_TOKEN,
      useExisting: forwardRef(() => TreeWellbore),
    },
    { provide: TREE_NODE_TOKEN, useExisting: forwardRef(() => TreeWellbore) },
  ],
  templateUrl: './tree-wellbore.html',
  styleUrl: './tree-wellbore.scss',
})
export class TreeWellbore extends TreeBranch {
  readonly $wellboreId = input.required<string>({ alias: 'wellboreId' });

  protected readonly wellboreResource = httpResource<Wellbore>(
    () => `api/wellbores/${this.$wellboreId()}`
  );

  readonly $wellbore = this.wellboreResource.asReadonly().value;
  readonly $loading = this.wellboreResource.isLoading;
}
