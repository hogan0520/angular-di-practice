import { Component, contentChildren, effect, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { Step } from '../model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-stepper',
  imports: [NgClass],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
})
export class Stepper {
  protected steps = contentChildren<Step>(Step);

  currentStep = signal(0);

  constructor() {
    effect((onCleanup) => {
      const currentIndex = this.currentStep();
      const steps = this.steps();
      const clearObs = new Subject<void>();

      steps.forEach((step, index) => {
        step.visible.set(index === currentIndex);
        step.inc
          .pipe(takeUntil(clearObs))
          .subscribe((inc) =>
            this.currentStep.set(
              Math.max(Math.min(steps.length, currentIndex + inc), 0)
            )
          );
      });

      onCleanup(() => {
        clearObs.next();
        clearObs.complete();
      });
    });
  }
}
