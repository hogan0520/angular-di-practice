import { Component, signal } from '@angular/core';
import { BasicStepper } from './basic-stepper/basic-stepper';
import { BasicStep1 } from './basic-step-1/basic-step-1';
import { BasicStep2 } from './basic-step-2/basic-step-2';
import { BasicStep3 } from './basic-step-3/basic-step-3';

@Component({
  selector: 'app-basic-stepper-container',
  imports: [BasicStepper, BasicStep1, BasicStep2, BasicStep3],
  templateUrl: './basic-stepper-container.component.html',
  styleUrl: './basic-stepper-container.component.scss',
})
export class BasicStepperContainer {
  private readonly totalSteps = 3;

  protected steps = [
    'Register',
    'Avatar',
    'Final'
  ]

  currentStep = signal(1);


  onNext() {
    this.currentStep.set(Math.min(this.totalSteps, this.currentStep() + 1))
  }

  onPre() {
    this.currentStep.set(Math.max(1, this.currentStep() - 1))
  }
}
