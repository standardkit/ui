import { NgModule } from '@angular/core';
import {
  SkBarModule,
  SkColumnModule,
  SkIconModule,
  SkLinkModule,
  SkPillModule,
  SkRowModule,
  SkTagModule,
  SkToggleModule,
  SkTopBarModule,
  UiBreadcrumbs,
  UiButton,
  UiCard,
} from '@standardkit/ui';
import { BarPage } from './bar';
import { ButtonPage } from './button';
import { IconPage } from './icon';
import { LinkPage } from './link';
import { PillPage } from './pill';
import { TagPage } from './tag';
import { TogglePage } from './toggle';

const PAGES: any[] = [BarPage, ButtonPage, IconPage, LinkPage, PillPage, TagPage, TogglePage];

@NgModule({
  imports: [
    SkBarModule,
    UiButton,
    SkColumnModule,
    SkIconModule,
    SkLinkModule,
    SkPillModule,
    SkRowModule,
    SkTagModule,
    SkToggleModule,
    SkTopBarModule,
    UiBreadcrumbs,
    UiCard,
  ],
  declarations: PAGES,
  exports: PAGES,
})
export class CoreModule {}
