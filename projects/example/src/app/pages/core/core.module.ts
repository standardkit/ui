import { NgModule } from '@angular/core';
import {
  SkColumnModule,
  SkLinkModule,
  SkPillModule,
  SkRowModule,
  SkTagModule,
  SkToggleModule,
  SkTopBarModule,
  UiBar,
  UiBreadcrumbs,
  UiButton,
  UiCard,
  UiIcon,
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
    UiButton,
    SkColumnModule,
    SkLinkModule,
    SkPillModule,
    SkRowModule,
    SkTagModule,
    SkToggleModule,
    SkTopBarModule,
    UiBreadcrumbs,
    UiCard,
    UiBar,
    UiIcon,
  ],
  declarations: PAGES,
  exports: PAGES,
})
export class CoreModule {}
