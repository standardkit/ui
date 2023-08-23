import { NgModule } from '@angular/core';
import { AccordionPage } from './accordion';
import { AlertPage } from './alert';
import { SkAccordionModule, SkAlertModule, SkBarModule, SkIconModule } from '@standardkit/ui';

const PAGES: any[] = [AccordionPage, AlertPage];

@NgModule({
  imports: [SkAccordionModule, SkAlertModule, SkBarModule, SkIconModule],
  declarations: PAGES,
  exports: PAGES,
})
export class CommonModule {}
