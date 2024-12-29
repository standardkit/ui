import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Style } from '../../../constants';
import { StyleType } from '../../../types';
import { UiIcon } from '../icon';

@Component({
  selector: 'ui-pill',
  templateUrl: 'pill.component.html',
  styleUrl: 'pill.component.scss',
  imports: [NgClass, UiIcon, NgIf],
})
export class UiPill {
  @Input() public type?: StyleType = Style.Primary;
  @Input() public label?: string;
  @Input() public icon?: string;
  @Input() public alignIcon: 'left' | 'right' = 'left';

  @Output() public selectPill: EventEmitter<Event> = new EventEmitter<Event>();

  public onClick(event: Event): void {
    this.selectPill.emit(event);
  }
}
