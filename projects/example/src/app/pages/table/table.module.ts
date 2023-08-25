import { NgModule } from '@angular/core';
import { PaginationPage } from './pagination';
import { SkPaginationModule, SkColumnModule, SkRowModule, SkTopBarModule } from '@standardkit/ui';

const PAGES: any[] = [PaginationPage];

@NgModule({
  imports: [SkTopBarModule, SkPaginationModule, SkColumnModule, SkRowModule],
  declarations: PAGES,
  exports: PAGES,
})
export class TableModule {}
