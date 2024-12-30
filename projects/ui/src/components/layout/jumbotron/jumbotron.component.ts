import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-jumbotron',
  templateUrl: 'jumbotron.component.html',
  styleUrl: 'jumbotron.component.scss',
})
export class UiJumbotron {
  @Input() public name: string = '';
  @Input() public description: string = '';
}
