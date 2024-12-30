import { NgModule } from '@angular/core';
import {
  SkTableModule,
  UiBreadcrumbs,
  UiButton,
  UiColumn,
  UiDataTable,
  UiPagination,
  UiRow,
  UiSearch,
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
    SkTableModule,
    UiTopBar,
    UiBreadcrumbs,
    UiTabGroup,
    UiTab,
    UiColumn,
    UiDataTable,
    UiPagination,
    UiSearch,
  ],
  declarations: PAGES,
  exports: PAGES,
})
export class TableModule {}
