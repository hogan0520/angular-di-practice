import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StepperShower } from './stepper-shower/stepper-shower';

@Component({
  imports: [RouterModule, StepperShower],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'angular-di-prictice';
}
