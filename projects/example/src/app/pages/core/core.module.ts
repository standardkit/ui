import { NgModule } from '@angular/core';
import {
  UiBar,
  UiBreadcrumbs,
  UiButton,
  UiCard,
  UiColumn,
  UiIcon,
  UiLink,
  UiPill,
  UiRow,
  UiTag,
  UiToggle,
  UiTopBar,
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
  imports: [UiButton, UiRow, UiBreadcrumbs, UiCard, UiBar, UiIcon, UiLink, UiPill, UiTag, UiToggle, UiColumn, UiTopBar],
  declarations: PAGES,
  exports: PAGES,
})
export class CoreModule {}
