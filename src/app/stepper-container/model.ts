import {
  computed,
  effect,
  inject,
  OutputEmitterRef,
  signal,
  Signal,
  TemplateRef,
} from '@angular/core';

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
  protected abstract readonly completed: OutputEmitterRef<void>;

  readonly $completed = signal(false);

  protected readonly $steps = signal<StepToken[]>([]);

  protected readonly $currentStepIndex = signal(0);

  private readonly $currentStep = computed(() => {
    return this.$steps().at(this.$currentStepIndex());
  });

  protected readonly $currentStepTemplate = computed(
    () => this.$currentStep()?.template() ?? null
  );

  constructor() {
    effect(() => {
      if (this.$currentStepIndex() >= this.$steps().length) {
        this.completed.emit();
        this.$completed.set(true);
      }
    });
  }

  register(step: StepToken) {
    this.$steps.set([...this.$steps(), step]);
  }

  go(count: 1 | -1) {
    if (this.$completed()) {
      return;
    }
    this.$currentStepIndex.set(
      Math.max(
        Math.min(this.$steps().length, this.$currentStepIndex() + count),
        0
      )
    );
  }
}
