import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {

  title = signal('Cubix Title');

  computedTitle = computed(() => `${this.title()} ${new Date().toISOString()}`)

  constructor() {
    effect(() => console.log(`Changed title: ${this.title()}`));
  }

  buttonClicked() {
    console.log('Button clicked');
  }
}
