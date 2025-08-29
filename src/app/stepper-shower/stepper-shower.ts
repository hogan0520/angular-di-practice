import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { BasicStepperContainer } from '../basic-stepper-container/basic-stepper-container.component';

@Component({
  selector: 'app-stepper-shower',
  imports: [BasicStepperContainer],
  templateUrl: './stepper-shower.html',
  styleUrl: './stepper-shower.scss',
})
export class StepperShower {
}
