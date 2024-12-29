import { NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SkIconModule } from '../../core';
import { ListItemInterface } from './list-item.interface';

@Component({
  selector: 'ui-list',
  templateUrl: 'list.component.html',
  styleUrl: 'list.component.scss',
  imports: [SkIconModule, NgForOf],
})
export class UiList {
  @Input() public items: ListItemInterface[] = [];
  @Input() public actionIcon: string = 'angle-right';
}
