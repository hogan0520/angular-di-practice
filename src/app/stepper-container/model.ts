import { computed, inject, signal, Signal, TemplateRef } from '@angular/core';

export abstract class StepToken {
  abstract title: string;
  abstract template: Signal<TemplateRef<unknown>>;

  protected readonly stepper = inject(StepperControl, {
    optional: true,
    host: true,
  });

  constructor() {
    this.stepper?.register(this);
  }
}

export abstract class StepperControl {
  protected $steps = signal<StepToken[]>([]);

  protected $currentStepIndex = signal(0);

  private readonly $currentStep = computed(() => {
    return this.$steps().at(this.$currentStepIndex());
  });

  protected $currentStepTemplate = computed(() =>
    this.$currentStep()?.template() ?? null
  );

  register(step: StepToken) {
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
