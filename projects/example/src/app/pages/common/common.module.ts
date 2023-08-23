import { NgModule } from '@angular/core';
import { AccordionPage } from './accordion';
import { AlertPage } from './alert';
import {
  SkRowModule,
  SkAccordionModule,
  SkAlertModule,
  SkBarModule,
  SkColumnModule,
  SkIconModule,
  SkTopBarModule,
} from '@standardkit/ui';

const PAGES: any[] = [AccordionPage, AlertPage];

@NgModule({
  imports: [SkAccordionModule, SkAlertModule, SkBarModule, SkIconModule, SkColumnModule, SkRowModule, SkTopBarModule],
  declarations: PAGES,
  exports: PAGES,
})
export class CommonModule {}
