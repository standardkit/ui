import { NgModule } from '@angular/core';
import {
  SkColumnModule,
  SkRowModule,
  SkTopBarModule,
  UiBar,
  UiBreadcrumbs,
  UiButton,
  UiCard,
  UiIcon,
  UiLink,
  UiPill,
  UiTag,
  UiToggle,
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
    SkRowModule,
    SkTopBarModule,
    UiBreadcrumbs,
    UiCard,
    UiBar,
    UiIcon,
    UiLink,
    UiPill,
    UiTag,
    UiToggle,
  ],
  declarations: PAGES,
  exports: PAGES,
})
export class CoreModule {}
