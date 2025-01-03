import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Style } from '../../../constants';
import { IconSetType, StyleType } from '../../../types';
import { UiIcon } from '../icon';

@Component({
  selector: 'ui-button',
  imports: [UiIcon, NgIf],
  templateUrl: 'button.component.html',
  styleUrl: 'button.component.scss',
})
export class UiButton {
  @Input() public type: StyleType = Style.Primary;
  @Input() public disabled: boolean = false;
  @Input() public fullWidth: boolean = false;
  @Input() public compact: boolean = false; // TODO : Introduce sizes
  @Input() public isSharp: boolean = false;
  @Input() public icon?: string;
  @Input() public iconSet: IconSetType = 'solid';
  @Input() public alignIcon: 'left' | 'right' = 'right';
  @Input() public flipIcon: boolean = false;
  @Input() public isSubmit: boolean = false;
  @Input() public noShadow: boolean = false;

  @Output() public buttonClick: EventEmitter<void> = new EventEmitter<void>();

  public onClick(): void {
    if (this.disabled) {
      return;
    }

    this.buttonClick.emit();
  }
}
