import { NgModule } from '@angular/core';
import {
  SkBottomBarModule,
  SkBreadcrumbsModule,
  SkColumnModule,
  SkJumbotronModule,
  SkRowModule,
  SkTopBarModule,
  UiButton,
} from '@standardkit/ui';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    SkBottomBarModule,
    SkBreadcrumbsModule,
    UiButton,
    SkColumnModule,
    SkJumbotronModule,
    SkRowModule,
    SkTopBarModule,
  ],
  declarations: [HomePage],
  exports: [HomePage],
})
export class HomeModule {}
