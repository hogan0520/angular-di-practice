import { Component } from '@angular/core';
import { Stepper } from './stepper/stepper.component';
import { Step1 } from './step-1/step1.component';
import { Step2 } from './step-2/step2.component';
import { Step3 } from './step-3/step3.component';

@Component({
  selector: 'app-stepper-container',
  imports: [Stepper, Step1, Step2, Step3],
  templateUrl: './stepper-container.component.html',
  styleUrl: './stepper-container.component.scss',
})
export class StepperContainer {}
