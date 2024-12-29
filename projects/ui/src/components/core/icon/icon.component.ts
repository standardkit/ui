import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconSetType } from '../../../types';

@Component({
  selector: 'ui-icon',
  templateUrl: 'icon.component.html',
  styleUrl: 'icon.component.scss',
  imports: [NgClass],
})
export class UiIcon {
  @Input() public icon?: string = 'icons';
  @Input() public iconSet: IconSetType = 'solid';
  @Input() public isSpinning: boolean = false;
  @Input() public isReverse: boolean = false;
  @Input() public flipX: boolean = false;
  @Input() public flipY: boolean = false;
}
