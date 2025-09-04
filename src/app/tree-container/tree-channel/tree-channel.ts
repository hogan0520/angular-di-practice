import { Component, forwardRef, input } from '@angular/core';
import { Channel, TREE_NODE_TOKEN, TreeLeaf } from '../model';
import { httpResource } from '@angular/common/http';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-tree-channel',
  imports: [UpperCasePipe],
  providers: [
    { provide: TREE_NODE_TOKEN, useExisting: forwardRef(() => TreeChannel) },
  ],
  templateUrl: './tree-channel.html',
  styleUrl: './tree-channel.scss',
})
export class TreeChannel extends TreeLeaf {
  readonly $channelId = input.required<string>({ alias: 'channelId' });

  protected readonly channelResource = httpResource<Channel>(
    () => `api/channels/${this.$channelId()}`
  );

  readonly $channel = this.channelResource.asReadonly().value;
  readonly $loading = this.channelResource.isLoading;
}
