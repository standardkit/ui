import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-card-page',
  templateUrl: 'card-page.component.html',
  styleUrl: 'card-page.component.scss',
  imports: [NgIf],
})
export class UiCardPage {
  @Input() public logo?: string;
  @Input() public brand: string = '';
}
