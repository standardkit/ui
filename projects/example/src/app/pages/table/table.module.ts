import { NgModule } from '@angular/core';
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
} from '@standardkit/ui';

const PAGES: any[] = [PaginationPage, SearchPage, TablePage];

@NgModule({
  imports: [
    SkTopBarModule,
    SkPaginationModule,
    SkColumnModule,
    SkRowModule,
    SkBreadcrumbsModule,
    SkTableModule,
    SkButtonModule,
    SkSearchModule,
  ],
  declarations: PAGES,
  exports: PAGES,
})
export class TableModule {}
