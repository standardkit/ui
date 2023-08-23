import { NgIf, NgTemplateOutlet } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionPage } from './accordion';
import { AlertPage } from './alert';
import { CardPage } from './card';
import { ModalPage } from './modal';
import { RichTextPage } from './rich-text';
import {
  SkModalModule,
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
  RichTextModule,
} from '@standardkit/ui';

const PAGES: any[] = [AccordionPage, AlertPage, CardPage, ModalPage, RichTextPage];

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
    SkModalModule,
    NgIf,
    NgTemplateOutlet,
    RichTextModule,
  ],
  declarations: PAGES,
  exports: PAGES,
})
export class CommonModule {}
