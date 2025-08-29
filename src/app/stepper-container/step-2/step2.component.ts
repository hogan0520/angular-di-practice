import { Component, output } from '@angular/core';

@Component({
  selector: 'app-step-2',
  imports: [],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.scss'
})
export class Step2 {
  preStep = output()
  nextStep = output()
}
