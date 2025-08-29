import { Component, output } from '@angular/core';

@Component({
  selector: 'app-step-1',
  imports: [],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss'
})
export class Step1 {
  nextStep = output()
}
