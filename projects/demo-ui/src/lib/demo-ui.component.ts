import { Component } from '@angular/core';

@Component({
  selector: 'demo-ui',
  template: ` <p>demo-ui works!</p> `,
  styles: [],
})
export class DemoUiComponent {
  public num: number = 3;

  public func(): void {
    if (this.num > 5) {
      console.log('something');
    } else {
      console.log('something else');
    }
  }
}
