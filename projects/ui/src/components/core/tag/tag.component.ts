import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UiIcon } from '../icon';

@Component({
  selector: 'ui-tag',
  templateUrl: 'tag.component.html',
  styleUrl: 'tag.component.scss',
  imports: [UiIcon, NgIf],
})
export class UiTag {
  @Input() public icon?: string;
  // TODO : Add style input for different styles
  @Input() public alignIcon: 'left' | 'right' = 'right';

  @Output() public selectTag: EventEmitter<Event> = new EventEmitter<Event>();

  public onSelectTag(event: Event): void {
    if (!this.selectTag.observed) {
      return;
    }
    this.selectTag.emit(event);
  }
}
