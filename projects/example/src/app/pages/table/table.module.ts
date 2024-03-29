import { NgModule } from '@angular/core';
import { DataTablePage } from './data-table';
import { PaginationPage } from './pagination';
import { SearchPage } from './search';
import { TablePage } from './table';
import {
  SkPaginationModule,
  SkColumnModule,
  SkRowModule,
  SkTopBarModule,
  SkBreadcrumbsModule,
  SkTableModule,
  SkButtonModule,
  SkSearchModule,
  SkDataTableModule,
  SkTabGroupModule,
  SkTabModule,
} from '@standardkit/ui';

const PAGES: any[] = [DataTablePage, PaginationPage, SearchPage, TablePage];

@NgModule({
  imports: [
    SkBreadcrumbsModule,
    SkButtonModule,
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
