import { EventEmitter, signal, WritableSignal } from '@angular/core';

export abstract class Step {
  visible: WritableSignal<boolean> = signal(false)
  abstract title: string
  inc = new EventEmitter<-1 | 1>();
}
