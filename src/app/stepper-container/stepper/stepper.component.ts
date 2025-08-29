import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-stepper',
  imports: [NgClass],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
})
export class Stepper {
  currentStep = input.required<number>();
  steps = input.required<string[]>();
}
