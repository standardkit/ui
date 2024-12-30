import { Component } from '@angular/core';
import { PaginationStateInterface } from '@standardkit/core';
import { BreadcrumbInterface, UiBreadcrumbs, UiColumn, UiPagination, UiRow, UiTopBar } from '@standardkit/ui';

@Component({
  imports: [UiTopBar, UiBreadcrumbs, UiRow, UiColumn, UiPagination],
  templateUrl: 'pagination.page.html',
})
export class PaginationPage {
  public state: PaginationStateInterface = {
    numberOfRows: 10,
    totalNumberOfRows: 123,
    totalNumberOfPages: 13,
    currentPage: 2,
    limit: 10,
    offset: 20,
  };

  public breadcrumbs: BreadcrumbInterface[] = [{ name: 'Table' }, { name: 'Pagination' }];
}
