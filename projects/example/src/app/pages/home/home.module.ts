import { NgModule } from '@angular/core';
import { HomePage } from './home.page';
import {
  SkBottomBarModule,
  SkBreadcrumbsModule,
  SkButtonModule,
  SkColumnModule,
  SkJumbotronModule,
  SkRowModule,
  SkTopBarModule,
} from '@standardkit/ui';

@NgModule({
  imports: [
    SkBottomBarModule,
    SkBreadcrumbsModule,
    SkButtonModule,
    SkColumnModule,
    SkJumbotronModule,
    SkRowModule,
    SkTopBarModule,
  ],
  declarations: [HomePage],
  exports: [HomePage],
})
export class HomeModule {}
