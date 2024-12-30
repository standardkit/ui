import { NgModule } from '@angular/core';
import {
  SkRowModule,
  SkTopBarModule,
  UiBottomBar,
  UiBreadcrumbs,
  UiButton,
  UiColumn,
  UiJumbotron,
} from '@standardkit/ui';
import { HomePage } from './home.page';

@NgModule({
  imports: [UiBottomBar, UiButton, SkRowModule, SkTopBarModule, UiBreadcrumbs, UiColumn, UiJumbotron],
  declarations: [HomePage],
  exports: [HomePage],
})
export class HomeModule {}
