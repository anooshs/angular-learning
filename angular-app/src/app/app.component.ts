import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-app';
  count = signal(1);

  increment() {
    this.count.update((v) => v + 1);
  }

  reset() {
    this.count.set(0);
  }
}
