import { Component, forwardRef, output, OutputEmitterRef } from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { StepperControl } from '../model';

@Component({
  selector: 'app-stepper',
  imports: [NgClass, NgTemplateOutlet],
  providers: [
    { provide: StepperControl, useExisting: forwardRef(() => Stepper) },
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
})
export class Stepper extends StepperControl {
  protected completed: OutputEmitterRef<void> = output();
}
