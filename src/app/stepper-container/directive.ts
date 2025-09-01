import { Directive, HostListener, inject } from '@angular/core';
import { StepperControl } from './model';

@Directive({
  selector: '[prevBtn]',
})
export class PrevBtnDirective {
  private readonly stepper = inject(StepperControl, {
    optional: false,
  });

  @HostListener('click')
  protected onPrev() {
    this.stepper.go(-1);
  }
}

@Directive({
  selector: '[nextBtn]',
})
export class NextBtnDirective {
  private readonly stepper = inject(StepperControl, {
    optional: false,
  });

  @HostListener('click')
  protected onPrev() {
    this.stepper.go(1);
  }
}
