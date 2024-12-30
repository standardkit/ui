import { NgModule } from '@angular/core';
import {
  SkRowModule,
  SkTopBarModule,
  UiBar,
  UiBreadcrumbs,
  UiButton,
  UiCard,
  UiColumn,
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
    UiColumn,
  ],
  declarations: PAGES,
  exports: PAGES,
})
export class CoreModule {}
