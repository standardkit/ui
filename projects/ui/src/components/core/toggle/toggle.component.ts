import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sk-toggle',
  templateUrl: 'toggle.component.html',
  styleUrls: ['toggle.component.scss'],
})
export class ToggleComponent {
  @Input() public isActive: boolean = false;
  @Input() public isPending: boolean = false;
  @Input() public isDisabled: boolean = false;

  @Output() public toggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  public onToggle(): void {
    if (this.isDisabled) {
      return;
    }

    this.toggle.emit(!this.isActive);
  }
}
