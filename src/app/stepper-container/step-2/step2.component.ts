import { Component, forwardRef, TemplateRef, viewChild } from '@angular/core';
import { StepToken } from '../model';
import { NextBtnDirective, PrevBtnDirective } from '../directive';

@Component({
  selector: 'app-step-2',
  imports: [PrevBtnDirective, NextBtnDirective],
  providers: [{ provide: StepToken, useValue: forwardRef(() => Step2) }],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.scss',
})
export class Step2 extends StepToken {
  title = 'Avatar';
  readonly template = viewChild.required(TemplateRef);
}
