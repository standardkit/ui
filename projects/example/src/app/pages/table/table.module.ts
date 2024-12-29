import { NgModule } from '@angular/core';
import {
  SkColumnModule,
  SkDataTableModule,
  SkPaginationModule,
  SkRowModule,
  SkSearchModule,
  SkTabGroupModule,
  SkTableModule,
  SkTabModule,
  SkTopBarModule,
  UiBreadcrumbs,
  UiButton,
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
    SkTabGroupModule,
    SkTabModule,
    UiBreadcrumbs,
  ],
  declarations: PAGES,
  exports: PAGES,
})
export class TableModule {}
