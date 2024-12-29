import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-label',
  templateUrl: 'label.component.html',
  styleUrl: 'label.component.scss',
  imports: [NgIf],
})
export class UiLabel {
  @Input() public for: string = '';
  @Input() public isOptional: boolean = false;
}
