import { NgModule } from '@angular/core';
import { BarPage } from './bar';
import { ButtonPage } from './button';
import { IconPage } from './icon';
import { LinkPage } from './link';
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
} from '@standardkit/ui';

const PAGES: any[] = [BarPage, IconPage, ButtonPage, LinkPage, TagPage, TogglePage];

@NgModule({
  imports: [SkBarModule, SkIconModule, SkButtonModule, SkLinkModule, TagModule, ToggleModule, TopBarModule],
  declarations: PAGES,
  exports: PAGES,
})
export class CoreModule {}
