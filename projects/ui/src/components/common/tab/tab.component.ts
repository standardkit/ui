import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sk-tab[name]',
  templateUrl: 'tab.component.html',
  styleUrls: ['tab.component.scss'],
})
export class SkTabComponent {
  @Input() public isActive: boolean = false;
  @Input() public name!: string;

  @Output() public selectTab: EventEmitter<void> = new EventEmitter();

  public onSelectTab(): void {
    this.selectTab.emit();
  }
}
