import { Component } from '@angular/core';
import {
  BreadcrumbInterface,
  UiBottomBar,
  UiBreadcrumbs,
  UiButton,
  UiColumn,
  UiJumbotron,
  UiRow,
  UiTopBar,
} from '@standardkit/ui';

@Component({
  imports: [UiTopBar, UiBreadcrumbs, UiButton, UiRow, UiColumn, UiJumbotron, UiBottomBar],
  templateUrl: './home.page.html',
})
export class HomePage {
  public breadcrumbs: BreadcrumbInterface[] = [
    { name: 'StandardKit' },
    { name: 'Example', route: '/core/link' },
    { name: 'Another one' },
  ];
}
