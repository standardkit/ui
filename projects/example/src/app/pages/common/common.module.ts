import { NgIf, NgTemplateOutlet } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  SkBarModule,
  SkCardModule,
  SkColumnModule,
  SkIconModule,
  SkJumbotronModule,
  SkLinkModule,
  SkListModule,
  SkModalModule,
  SkPillModule,
  SkRichTextModule,
  SkRowModule,
  SkSegmentGroupModule,
  SkSegmentModule,
  SkStatisticsCardModule,
  SkStepperModule,
  SkTabGroupModule,
  SkTabModule,
  SkTagModule,
  SkTopBarModule,
  UiAccordion,
  UiAccordionItem,
  UiAlert,
  UiBreadcrumbs,
  UiButton,
} from '@standardkit/ui';
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
    NgIf,
    NgTemplateOutlet,
    SkBarModule,
    UiButton,
    SkCardModule,
    SkColumnModule,
    SkIconModule,
    SkJumbotronModule,
    SkLinkModule,
    SkListModule,
    SkModalModule,
    SkPillModule,
    SkRichTextModule,
    SkRowModule,
    SkSegmentGroupModule,
    SkSegmentModule,
    SkStatisticsCardModule,
    SkStepperModule,
    SkTabGroupModule,
    SkTabModule,
    SkTagModule,
    SkTopBarModule,
    UiAlert,
    UiAccordion,
    UiAccordionItem,
    UiBreadcrumbs,
  ],
  declarations: PAGES,
  exports: PAGES,
})
export class CommonModule {}
