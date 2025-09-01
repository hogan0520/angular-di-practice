import { Component, inject, TemplateRef, viewChild } from '@angular/core';
import { Stepper } from '../stepper/stepper.component';

@Component({
  selector: 'app-step-3',
  imports: [],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.scss',
})
export class Step3 {
  private readonly stepper = inject(Stepper, {
    optional: true,
    host: true,
  });

  private readonly templateRef = viewChild.required(TemplateRef);

  constructor() {
    this.stepper?.register({
      title: 'Final',
      template: this.templateRef,
    });
  }

  onNext() {
    this.stepper?.go(1);
  }

  onPrev() {
    this.stepper?.go(-1);
  }
}
