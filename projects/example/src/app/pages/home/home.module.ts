import { NgModule } from '@angular/core';
import {
  SkColumnModule,
  SkJumbotronModule,
  SkRowModule,
  SkTopBarModule,
  UiBottomBar,
  UiBreadcrumbs,
  UiButton,
} from '@standardkit/ui';
import { HomePage } from './home.page';

@NgModule({
  imports: [UiBottomBar, UiButton, SkColumnModule, SkJumbotronModule, SkRowModule, SkTopBarModule, UiBreadcrumbs],
  declarations: [HomePage],
  exports: [HomePage],
})
export class HomeModule {}
