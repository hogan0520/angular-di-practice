import { Component, output } from '@angular/core';

@Component({
  selector: 'app-basic-step-2',
  imports: [],
  templateUrl: './basic-step-2.html',
  styleUrl: './basic-step-2.scss'
})
export class BasicStep2 {
  preStep = output()
  nextStep = output()
}
