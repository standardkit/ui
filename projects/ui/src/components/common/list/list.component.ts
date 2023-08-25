import { Component, Input } from '@angular/core';
import { ListItemInterface } from './list-item.interface';

@Component({
  selector: 'sk-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class SkListComponent {
  @Input() public items: ListItemInterface[] = [];
  @Input() public actionIcon: string = 'angle-right';
}
