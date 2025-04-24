import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ScrollingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-app';
  count = signal(1);
  // items = Array.from({ length: 1000 }, (_, i) => i + 1);
  items = Array.from({ length: 1000 }).map((i, j) => ({
    id: j,
    name: `Item ${j}`,
  }));
  constructor() {
    console.log('count', this.count());
    console.log('items', this.items);
  }
  increment() {
    this.count.update((v) => v + 1);
  }

  reset() {
    this.count.set(0);
  }
}
