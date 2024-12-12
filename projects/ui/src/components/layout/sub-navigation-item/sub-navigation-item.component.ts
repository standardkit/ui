import { Component, Input } from '@angular/core';

@Component({
  selector: 'sk-sub-navigation-item[name][route]',
  templateUrl: 'sub-navigation-item.component.html',
  styleUrls: ['sub-navigation-item.component.scss'],
  standalone: false,
})
export class SkSubNavigationItemComponent {
  @Input() public name!: string;
  @Input() public route!: string;
}
