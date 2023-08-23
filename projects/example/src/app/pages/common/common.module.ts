import { NgModule } from '@angular/core';
import { AccordionPage } from './accordion';
import { AlertPage } from './alert';
import { CardPage } from './card';
import {
  SkRowModule,
  SkAccordionModule,
  SkAlertModule,
  SkBarModule,
  SkColumnModule,
  SkIconModule,
  SkTopBarModule,
  SkBreadcrumbsModule,
  SkCardModule,
  SkTagModule,
  SkPillModule,
  SkButtonModule,
  SkLinkModule,
} from '@standardkit/ui';

const PAGES: any[] = [AccordionPage, AlertPage, CardPage];

@NgModule({
  imports: [
    SkAccordionModule,
    SkAlertModule,
    SkBarModule,
    SkIconModule,
    SkColumnModule,
    SkRowModule,
    SkTopBarModule,
    SkBreadcrumbsModule,
    SkCardModule,
    SkTagModule,
    SkPillModule,
    SkButtonModule,
    SkLinkModule,
  ],
  declarations: PAGES,
  exports: PAGES,
})
export class CommonModule {}
