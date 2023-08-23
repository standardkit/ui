import { NgModule } from '@angular/core';
import { BarPage } from './bar';
import { ButtonPage } from './button';
import { IconPage } from './icon';
import { LinkPage } from './link';
import { PillPage } from './pill';
import { TagPage } from './tag';
import { TogglePage } from './toggle';
import {
  TagModule,
  SkButtonModule,
  SkBarModule,
  SkIconModule,
  SkLinkModule,
  ToggleModule,
  TopBarModule,
  PillModule,
} from '@standardkit/ui';

const PAGES: any[] = [BarPage, ButtonPage, IconPage, LinkPage, PillPage, TagPage, TogglePage];

@NgModule({
  imports: [SkBarModule, SkIconModule, SkButtonModule, SkLinkModule, TagModule, ToggleModule, TopBarModule, PillModule],
  declarations: PAGES,
  exports: PAGES,
})
export class CoreModule {}
