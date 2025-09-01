import {
  Component,
  inject,
  signal,
  Signal,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { Stepper } from '../stepper/stepper.component';

@Component({
  selector: 'app-step-2',
  imports: [],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.scss'
})
export class Step2 {
  private readonly stepper = inject(Stepper, {
    optional: true,
    host: true,
  })

  private readonly templateRef = viewChild.required(TemplateRef);

  constructor() {
    this.stepper?.register({
      title: 'Avatar',
      template: this.templateRef,
    })
  }

  onNext() {
    this.stepper?.go(1)
  }

  onPrev() {
    this.stepper?.go(-1)
  }
}
