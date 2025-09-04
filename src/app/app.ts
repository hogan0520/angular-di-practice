import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StepperShower } from './stepper-shower/stepper-shower';
import { TreeContainer } from './tree-container/tree-container';

@Component({
  imports: [RouterModule, StepperShower, TreeContainer],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'angular-di-practice';
}
