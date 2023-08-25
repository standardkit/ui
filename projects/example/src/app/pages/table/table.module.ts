import { NgModule } from '@angular/core';
import { PaginationPage } from './pagination';
import { TablePage } from './table';
import {
  SkPaginationModule,
  SkColumnModule,
  SkRowModule,
  SkTopBarModule,
  SkBreadcrumbsModule,
  SkTableModule,
  SkButtonModule,
} from '@standardkit/ui';

const PAGES: any[] = [PaginationPage, TablePage];

@NgModule({
  imports: [
    SkTopBarModule,
    SkPaginationModule,
    SkColumnModule,
    SkRowModule,
    SkBreadcrumbsModule,
    SkTableModule,
    SkButtonModule,
  ],
  declarations: PAGES,
  exports: PAGES,
})
export class TableModule {}
