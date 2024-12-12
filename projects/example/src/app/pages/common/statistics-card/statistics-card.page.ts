import { Component } from '@angular/core';
import { BreadcrumbInterface } from '@standardkit/ui';

@Component({
  templateUrl: 'statistics-card.page.html',
  standalone: false,
})
export class StatisticsCardPage {
  public breadcrumbs: BreadcrumbInterface[] = [{ name: 'Common' }, { name: 'Statistics Card' }];
}
