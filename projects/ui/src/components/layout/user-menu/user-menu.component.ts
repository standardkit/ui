import { NgForOf, NgIf } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { UiIcon } from '../../core';
import { UserMenuItemInterface } from './user-menu-item.interface';

@Component({
  selector: 'ui-user-menu',
  templateUrl: 'user-menu.component.html',
  styleUrl: 'user-menu.component.scss',
  imports: [UiIcon, NgForOf, NgIf],
})
export class UiUserMenu {
  @Input() public username: string = '';
  @Input() public avatar?: string;
  @Input() public items: UserMenuItemInterface[] = [];

  public isExpanded: boolean = false;

  @HostListener('document:click')
  public outsideClick(): void {
    if (this.isExpanded) {
      this.isExpanded = false;
    }
  }

  public onToggleActions(event: Event): void {
    this.isExpanded = !this.isExpanded;
    event.stopPropagation();
  }

  public onInsideClick(event: Event): void {
    event.stopPropagation();
  }

  public onSelectItem(event: Event, item: UserMenuItemInterface): void {
    item.action();
    this.isExpanded = false;
    event.stopPropagation();
  }
}
