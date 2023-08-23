import { Component } from '@angular/core';
import { SkBreadcrumbInterface } from '@standardkit/ui';

@Component({ templateUrl: 'statistics-card.page.html' })
export class StatisticsCardPage {
  public breadcrumbs: SkBreadcrumbInterface[] = [{ name: 'Common' }, { name: 'Statistics Card' }];
}
