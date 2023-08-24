import { Component, Input } from '@angular/core';
import { SkListItemInterface } from './list-item.interface';

@Component({
  selector: 'sk-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class SkListComponent {
  @Input() public items: SkListItemInterface[] = [];
  @Input() public actionIcon: string = 'angle-right';
}
