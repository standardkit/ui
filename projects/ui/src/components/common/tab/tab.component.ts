import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-tab',
  templateUrl: 'tab.component.html',
  styleUrl: 'tab.component.scss',
})
export class UiTab {
  @Input() public isActive: boolean = false;
  @Input({ required: true }) public name!: string;

  @Output() public selectTab: EventEmitter<void> = new EventEmitter<void>();

  public onSelectTab(): void {
    this.selectTab.emit();
  }
}
