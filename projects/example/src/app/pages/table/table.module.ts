import { NgModule } from '@angular/core';
import {
  SkDataTableModule,
  SkPaginationModule,
  SkSearchModule,
  SkTableModule,
  SkTopBarModule,
  UiBreadcrumbs,
  UiButton,
  UiColumn,
  UiRow,
  UiTab,
  UiTabGroup,
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
    SkPaginationModule,
    SkSearchModule,
    SkTableModule,
    SkTopBarModule,
    SkDataTableModule,
    UiBreadcrumbs,
    UiTabGroup,
    UiTab,
    UiColumn,
  ],
  declarations: PAGES,
  exports: PAGES,
})
export class TableModule {}
