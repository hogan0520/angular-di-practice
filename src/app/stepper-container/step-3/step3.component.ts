import { Component, forwardRef, TemplateRef, viewChild } from '@angular/core';
import { StepToken } from '../model';
import { NextBtnDirective, PrevBtnDirective } from '../directive';

@Component({
  selector: 'app-step-3',
  imports: [PrevBtnDirective, NextBtnDirective],
  providers: [{ provide: StepToken, useValue: forwardRef(() => Step3) }],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.scss',
})
export class Step3 extends StepToken {
  title = 'Final';
  readonly template = viewChild.required(TemplateRef);
}
