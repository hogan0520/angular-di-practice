import { Component, forwardRef, Signal, TemplateRef, viewChild } from '@angular/core';
import { StepToken } from '../model';
import { NewStepper } from '../new-stepper/new-stepper';
import { Step1 } from '../step-1/step1.component';
import { Step2 } from '../step-2/step2.component';
import { Step3 } from '../step-3/step3.component';

@Component({
  selector: 'app-nested-step',
  imports: [NewStepper, Step1, Step2, Step3],
  providers: [
    { provide: StepToken, useExisting: forwardRef(() => NestedStep) },
  ],
  templateUrl: './nested-step.html',
  styleUrl: './nested-step.scss',
})
export class NestedStep extends StepToken {
  title = 'Nested Step';
  template: Signal<TemplateRef<unknown>> = viewChild.required(TemplateRef);

  onCompleted() {
    this.stepper?.go(1);
  }
}
