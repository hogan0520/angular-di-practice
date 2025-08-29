import { Component, output } from '@angular/core';

@Component({
  selector: 'app-basic-step-3',
  imports: [],
  templateUrl: './basic-step-3.html',
  styleUrl: './basic-step-3.scss'
})
export class BasicStep3 {
  preStep = output()
  nextStep = output()
}
