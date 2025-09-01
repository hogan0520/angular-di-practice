import { Component, computed, signal } from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Step } from '../model';

@Component({
  selector: 'app-stepper',
  imports: [NgClass, NgTemplateOutlet],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
})
export class Stepper {
  $currentStepIndex = signal(0);
  protected $steps = signal<Step[]>([]);

  private readonly $currentStep = computed(() => {
    return this.$steps().at(this.$currentStepIndex());
  });

  protected $currentStepTemplate = computed(() =>
    this.$currentStep()?.template() ?? null
  );

  register(step: Step) {
    this.$steps.set([...this.$steps(), step]);
  }

  go(count: 1 | -1) {
    this.$currentStepIndex.set(
      Math.max(
        Math.min(this.$steps().length, this.$currentStepIndex() + count),
        0
      )
    );
  }
}
