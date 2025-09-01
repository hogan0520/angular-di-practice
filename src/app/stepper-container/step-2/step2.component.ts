import { Component, forwardRef } from '@angular/core';
import { Step } from '../model';

@Component({
  selector: 'app-step-2',
  imports: [],
  providers: [{ provide: Step, useExisting: forwardRef(() => Step2) }],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.scss',
})
export class Step2 extends Step {
  title = 'Avatar';
}
