import { NgModule } from '@angular/core';
import { BarPage } from './bar';
import { ButtonPage } from './button';
import { IconPage } from './icon';
import { LinkPage } from './link';
import { PillPage } from './pill';
import { TagPage } from './tag';
import { TogglePage } from './toggle';
import {
  SkTagModule,
  SkButtonModule,
  SkBarModule,
  SkIconModule,
  SkLinkModule,
  SkToggleModule,
  SkTopBarModule,
  SkPillModule,
  SkRowModule,
  SkColumnModule,
  SkBreadcrumbsModule,
  SkCardModule,
} from '@standardkit/ui';

const PAGES: any[] = [BarPage, ButtonPage, IconPage, LinkPage, PillPage, TagPage, TogglePage];

@NgModule({
  imports: [
    SkBarModule,
    SkBreadcrumbsModule,
    SkButtonModule,
    SkCardModule,
    SkColumnModule,
    SkIconModule,
    SkLinkModule,
    SkPillModule,
    SkRowModule,
    SkTagModule,
    SkToggleModule,
    SkTopBarModule,
  ],
  declarations: PAGES,
  exports: PAGES,
})
export class CoreModule {}
