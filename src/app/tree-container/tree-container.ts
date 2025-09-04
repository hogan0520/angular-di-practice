import { Component } from '@angular/core';
import { TreeDataExplorer } from './tree-data-explorer/tree-data-explorer';

@Component({
  selector: 'app-tree-container',
  imports: [TreeDataExplorer],
  templateUrl: './tree-container.html',
  styleUrl: './tree-container.scss',
})
export class TreeContainer {}
