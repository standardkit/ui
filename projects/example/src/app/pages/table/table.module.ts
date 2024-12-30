import { NgModule } from '@angular/core';
import {
  UiBreadcrumbs,
  UiButton,
  UiColumn,
  UiDataTable,
  UiPagination,
  UiRow,
  UiSearch,
  UiTab,
  UiTabGroup,
  UiTable,
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
    UiTopBar,
    UiBreadcrumbs,
    UiTabGroup,
    UiTab,
    UiColumn,
    UiDataTable,
    UiTable,
    UiPagination,
    UiSearch,
  ],
  declarations: PAGES,
  exports: PAGES,
})
export class TableModule {}
