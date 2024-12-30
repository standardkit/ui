import { NgModule } from '@angular/core';
import {
  SkSearchModule,
  SkTableModule,
  UiBreadcrumbs,
  UiButton,
  UiColumn,
  UiDataTable,
  UiPagination,
  UiRow,
  UiTab,
  UiTabGroup,
  UiTopBar,
} from '@standardkit/ui';
import { DataTablePage } from './data-table';
import { PaginationPage } from './pagination';
import { SearchPage } from './search';
import { TablePage } from './table';

const PAGES: any[] = [DataTablePage, PaginationPage, SearchPage, TablePage];

@NgModule({
  imports: [
    UiButton,
    UiRow,
    SkSearchModule,
    SkTableModule,
    UiTopBar,
    UiBreadcrumbs,
    UiTabGroup,
    UiTab,
    UiColumn,
    UiDataTable,
    UiPagination,
  ],
  declarations: PAGES,
  exports: PAGES,
})
export class TableModule {}
