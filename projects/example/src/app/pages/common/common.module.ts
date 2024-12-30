import { NgIf, NgTemplateOutlet } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  UiAccordion,
  UiAccordionItem,
  UiAlert,
  UiBar,
  UiBreadcrumbs,
  UiButton,
  UiCard,
  UiColumn,
  UiIcon,
  UiJumbotron,
  UiLink,
  UiList,
  UiModal,
  UiPill,
  UiRichText,
  UiRow,
  UiSegment,
  UiSegmentGroup,
  UiStatisticsCard,
  UiStepper,
  UiStepperItem,
  UiTab,
  UiTabGroup,
  UiTopBar,
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
    UiTopBar,
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
    UiRow,
    UiColumn,
    UiJumbotron,
  ],
  declarations: PAGES,
  exports: PAGES,
})
export class CommonModule {}
