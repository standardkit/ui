import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-card',
  templateUrl: 'card.component.html',
  styleUrl: 'card.component.scss',
  imports: [NgIf],
})
export class UiCard {
  @Input() public name?: string;
}
