import { NgModule } from '@angular/core';
import {
  SkBreadcrumbsModule,
  SkColumnModule,
  SkDataTableModule,
  SkPaginationModule,
  SkRowModule,
  SkSearchModule,
  SkTabGroupModule,
  SkTableModule,
  SkTabModule,
  SkTopBarModule,
  UiButton,
} from '@standardkit/ui';
import { DataTablePage } from './data-table';
import { PaginationPage } from './pagination';
import { SearchPage } from './search';
import { TablePage } from './table';

const PAGES: any[] = [DataTablePage, PaginationPage, SearchPage, TablePage];

@NgModule({
  imports: [
    SkBreadcrumbsModule,
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
  ],
  declarations: PAGES,
  exports: PAGES,
})
export class TableModule {}
