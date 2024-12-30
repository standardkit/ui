import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'ui-sub-navigation-item',
  templateUrl: 'sub-navigation-item.component.html',
  styleUrl: 'sub-navigation-item.component.scss',
  imports: [RouterLink, RouterLinkActive],
})
export class UiSubNavigationItem {
  @Input({ required: true }) public name!: string;
  @Input({ required: true }) public route!: string;
}
