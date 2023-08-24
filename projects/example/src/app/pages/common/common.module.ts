import { NgIf, NgTemplateOutlet } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionPage } from './accordion';
import { AlertPage } from './alert';
import { CardPage } from './card';
import { ListPage } from './list';
import { ModalPage } from './modal';
import { RichTextPage } from './rich-text';
import { SegmentPage } from './segment';
import { StatisticsCardPage } from './statistics-card';
import { StepperPage } from './stepper';
import { TabPage } from './tab';
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
  SkRichTextModule,
  SkSegmentGroupModule,
  SkSegmentModule,
  SkStatisticsCardModule,
  SkJumbotronModule,
  SkStepperModule,
  SkTabGroupModule,
  SkTabModule,
  SkListModule,
} from '@standardkit/ui';

const PAGES: any[] = [
  AccordionPage,
  AlertPage,
  CardPage,
  ListPage,
  ModalPage,
  RichTextPage,
  SegmentPage,
  StatisticsCardPage,
  StepperPage,
  TabPage,
];

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
    SkRichTextModule,
    SkSegmentGroupModule,
    SkSegmentModule,
    SkStatisticsCardModule,
    SkJumbotronModule,
    SkStepperModule,
    SkTabGroupModule,
    SkTabModule,
    SkListModule,
  ],
  declarations: PAGES,
  exports: PAGES,
})
export class CommonModule {}
