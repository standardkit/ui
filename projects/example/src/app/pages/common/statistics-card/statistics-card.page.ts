import { Component } from '@angular/core';
import { BreadcrumbInterface, UiColumn, UiJumbotron, UiRow, UiStatisticsCard } from '@standardkit/ui';

@Component({
  imports: [UiRow, UiColumn, UiJumbotron, UiStatisticsCard],
  templateUrl: 'statistics-card.page.html',
})
export class StatisticsCardPage {
  public breadcrumbs: BreadcrumbInterface[] = [{ name: 'Common' }, { name: 'Statistics Card' }];
}
