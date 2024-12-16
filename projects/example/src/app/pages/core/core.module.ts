import { NgModule } from '@angular/core';
import {
  SkBarModule,
  SkBreadcrumbsModule,
  SkCardModule,
  SkColumnModule,
  SkIconModule,
  SkLinkModule,
  SkPillModule,
  SkRowModule,
  SkTagModule,
  SkToggleModule,
  SkTopBarModule,
  UiButton,
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
    SkBreadcrumbsModule,
    UiButton,
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
