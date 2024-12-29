import { NgModule } from '@angular/core';
import {
  SkColumnModule,
  SkDataTableModule,
  SkPaginationModule,
  SkRowModule,
  SkSearchModule,
  SkTableModule,
  SkTopBarModule,
  UiBreadcrumbs,
  UiButton,
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
    SkColumnModule,
    SkPaginationModule,
    SkRowModule,
    SkSearchModule,
    SkTableModule,
    SkTopBarModule,
    SkDataTableModule,
    UiBreadcrumbs,
    UiTabGroup,
    UiTab,
  ],
  declarations: PAGES,
  exports: PAGES,
})
export class TableModule {}
