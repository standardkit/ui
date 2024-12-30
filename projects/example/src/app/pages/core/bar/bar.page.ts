import { Component } from '@angular/core';
import { BreadcrumbInterface, UiBar, UiBreadcrumbs, UiButton, UiColumn, UiRow, UiTopBar } from '@standardkit/ui';

@Component({
  imports: [UiTopBar, UiBreadcrumbs, UiRow, UiColumn, UiBar, UiButton],
  templateUrl: 'bar.page.html',
})
export class BarPage {
  public breadcrumbs: BreadcrumbInterface[] = [{ name: 'Core' }, { name: 'Bar' }];
}
