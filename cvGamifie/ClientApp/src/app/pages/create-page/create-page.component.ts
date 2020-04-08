import { Component } from '@angular/core';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.css'
})
export class CreatePageComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}
