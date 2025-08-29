import { Component, output } from '@angular/core';

@Component({
  selector: 'app-step-3',
  imports: [],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.scss'
})
export class Step3 {
  preStep = output()
  nextStep = output()
}
