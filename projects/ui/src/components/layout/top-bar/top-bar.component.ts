import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-top-bar',
  templateUrl: 'top-bar.component.html',
  styleUrl: 'top-bar.component.scss',
  imports: [NgIf],
})
export class UiTopBar {
  @Input() public name?: string;
  @Input() public isFullWidth: boolean = false;
}
