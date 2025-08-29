import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-basic-stepper',
  imports: [NgClass],
  templateUrl: './basic-stepper.html',
  styleUrl: './basic-stepper.scss',
})
export class BasicStepper {
  currentStep = input.required<number>();
  steps = input.required<string[]>();
}
