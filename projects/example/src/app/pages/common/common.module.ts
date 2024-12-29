import { NgIf, NgTemplateOutlet } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  SkColumnModule,
  SkJumbotronModule,
  SkRowModule,
  SkTagModule,
  SkTopBarModule,
  UiAccordion,
  UiAccordionItem,
  UiAlert,
  UiBar,
  UiBreadcrumbs,
  UiButton,
  UiCard,
  UiIcon,
  UiLink,
  UiList,
  UiModal,
  UiPill,
  UiRichText,
  UiSegment,
  UiSegmentGroup,
  UiStatisticsCard,
  UiStepper,
  UiStepperItem,
  UiTab,
  UiTabGroup,
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
    UiButton,
    SkColumnModule,
    SkJumbotronModule,
    SkRowModule,
    SkTagModule,
    SkTopBarModule,
    UiAlert,
    UiAccordion,
    UiAccordionItem,
    UiBreadcrumbs,
    UiCard,
    UiList,
    UiModal,
    UiRichText,
    UiSegmentGroup,
    UiSegment,
    UiStatisticsCard,
    UiStepper,
    UiStepperItem,
    UiTabGroup,
    UiTab,
    UiIcon,
    UiBar,
    UiLink,
    UiPill,
  ],
  declarations: PAGES,
  exports: PAGES,
})
export class CommonModule {}
