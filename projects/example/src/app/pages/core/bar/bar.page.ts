import { Component } from '@angular/core';
import { SkBreadcrumbInterface } from '@standardkit/ui';

@Component({ templateUrl: 'bar.page.html' })
export class BarPage {
  public breadcrumbs: SkBreadcrumbInterface[] = [{ name: 'Core' }, { name: 'Bar', route: '/core/bar' }];
}
