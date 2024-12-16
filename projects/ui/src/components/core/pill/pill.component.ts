import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Style } from '../../../constants';
import { StyleType } from '../../../types';

@Component({
  selector: 'sk-pill',
  templateUrl: 'pill.component.html',
  styleUrls: ['pill.component.scss'],
  standalone: false,
})
export class SkPillComponent {
  @Input() public type?: StyleType = Style.Primary;
  @Input() public label?: string;
  @Input() public icon?: string;
  @Input() public alignIcon: 'left' | 'right' = 'left';

  @Output() public selectPill: EventEmitter<Event> = new EventEmitter<Event>();

  public onClick(event: Event): void {
    this.selectPill.emit(event);
  }
}
