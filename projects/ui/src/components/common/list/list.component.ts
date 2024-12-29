import { NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UiIcon } from '../../core';
import { ListItemInterface } from './list-item.interface';

@Component({
  selector: 'ui-list',
  templateUrl: 'list.component.html',
  styleUrl: 'list.component.scss',
  imports: [UiIcon, NgForOf],
})
export class UiList {
  @Input() public items: ListItemInterface[] = [];
  @Input() public actionIcon: string = 'angle-right';
}
