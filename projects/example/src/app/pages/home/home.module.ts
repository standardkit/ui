import { NgModule } from '@angular/core';
import {
  SkBottomBarModule,
  SkColumnModule,
  SkJumbotronModule,
  SkRowModule,
  SkTopBarModule,
  UiBreadcrumbs,
  UiButton,
} from '@standardkit/ui';
import { HomePage } from './home.page';

@NgModule({
  imports: [SkBottomBarModule, UiButton, SkColumnModule, SkJumbotronModule, SkRowModule, SkTopBarModule, UiBreadcrumbs],
  declarations: [HomePage],
  exports: [HomePage],
})
export class HomeModule {}
