import { Signal, TemplateRef } from '@angular/core';

export interface Step {
  title: string;
  template: Signal<TemplateRef<unknown>>;
}
