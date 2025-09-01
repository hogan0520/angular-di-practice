import { Component, forwardRef } from '@angular/core';
import { Step } from '../model';

@Component({
  selector: 'app-step-1',
  imports: [],
  providers: [{ provide: Step, useExisting:  forwardRef(() => Step1) }],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss'
})
export class Step1 extends Step{
  title = 'Register'
}
