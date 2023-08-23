import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sk-tag',
  templateUrl: 'tag.component.html',
  styleUrls: ['tag.component.scss'],
})
export class SkTagComponent {
  @Input() public icon?: string;
  // TODO : Add style input for different styles
  @Input() public alignIcon: 'left' | 'right' = 'right';

  @Output() public selectTag: EventEmitter<Event> = new EventEmitter();

  public onSelectTag(event: Event): void {
    if (!this.selectTag.observed) {
      return;
    }
    this.selectTag.emit(event);
  }
}
