import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UiIcon } from '../icon';

@Component({
  selector: 'ui-toggle',
  templateUrl: 'toggle.component.html',
  styleUrl: 'toggle.component.scss',
  imports: [UiIcon, NgIf],
})
export class UiToggle {
  @Input() public isActive: boolean = false;
  @Input() public isPending: boolean = false;
  @Input() public isDisabled: boolean = false;

  @Output() public toggleClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  public onToggle(): void {
    if (this.isDisabled) {
      return;
    }

    this.toggleClick.emit(!this.isActive);
  }
}
