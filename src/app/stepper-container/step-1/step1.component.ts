import { Component, inject, TemplateRef, viewChild } from '@angular/core';
import { Stepper } from '../stepper/stepper.component';

@Component({
  selector: 'app-step-1',
  imports: [],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss',
})
export class Step1 {
  private readonly stepper = inject(Stepper, {
    optional: true,
    host: true,
  });

  private readonly templateRef = viewChild.required(TemplateRef);

  constructor() {
    this.stepper?.register({
      title: 'Register',
      template: this.templateRef,
    });
  }

  onNext() {
    this.stepper?.go(1);
  }
}
