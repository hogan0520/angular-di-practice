import { Component, forwardRef, signal, TemplateRef, viewChild } from '@angular/core';
import { StepToken } from '../model';
import { FormsModule } from '@angular/forms';
import { NextBtnDirective } from '../directive';

@Component({
  selector: 'app-step-1',
  imports: [FormsModule, NextBtnDirective],
  providers: [{ provide: StepToken, useExisting: forwardRef(() => Step1) }],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss',
})
export class Step1 extends StepToken {
  title = 'Register';
  readonly template = viewChild.required(TemplateRef);

  protected userName = signal('');
  protected password = signal('');
}
