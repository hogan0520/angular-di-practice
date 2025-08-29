import { Component, output } from '@angular/core';

@Component({
  selector: 'app-basic-step-1',
  imports: [],
  templateUrl: './basic-step-1.html',
  styleUrl: './basic-step-1.scss'
})
export class BasicStep1 {
  nextStep = output()
}
