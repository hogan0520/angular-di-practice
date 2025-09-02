import { Component, forwardRef } from '@angular/core';
import { StepperControl } from '../model';
import { NgClass, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-new-stepper',
  imports: [NgClass, NgTemplateOutlet],
  providers: [
    { provide: StepperControl, useExisting: forwardRef(() => NewStepper) },
  ],
  templateUrl: './new-stepper.html',
  styleUrl: './new-stepper.scss',
})
export class NewStepper extends StepperControl {}
