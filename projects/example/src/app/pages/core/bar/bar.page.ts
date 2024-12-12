import { Component } from '@angular/core';
import { BreadcrumbInterface } from '@standardkit/ui';

@Component({
  templateUrl: 'bar.page.html',
  standalone: false,
})
export class BarPage {
  public breadcrumbs: BreadcrumbInterface[] = [{ name: 'Core' }, { name: 'Bar' }];
}
