import { Component, HostListener, Input } from '@angular/core';
import { UserMenuItemInterface } from './user-menu-item.interface';

@Component({
  selector: 'sk-user-menu',
  templateUrl: 'user-menu.component.html',
  styleUrls: ['user-menu.component.scss'],
  standalone: false,
})
export class SkUserMenuComponent {
  @HostListener('document:click')
  public outsideClick(): void {
    if (this.isExpanded) {
      this.isExpanded = false;
    }
  }

  @Input() public username: string = '';
  @Input() public avatar?: string;
  @Input() public items: UserMenuItemInterface[] = [];

  public isExpanded: boolean = false;

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
