import { Component, forwardRef } from '@angular/core';
import { Step } from '../model';

@Component({
  selector: 'app-step-3',
  imports: [],
  providers: [{ provide: Step, useExisting: forwardRef(() => Step3) }],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.scss',
})
export class Step3 extends Step {
  title = 'Final';
}
