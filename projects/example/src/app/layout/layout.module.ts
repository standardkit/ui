import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  SkCardPageModule,
  SkHeaderModule,
  SkSidebarModule,
  SkSidebarPageModule,
  SkUserMenuModule,
  UiButton,
} from '@standardkit/ui';
import { CardPageLayout } from './card-page';
import { SidebarPageLayout } from './sidebar-page';

@NgModule({
  imports: [
    RouterOutlet,
    SkSidebarPageModule,
    SkSidebarModule,
    SkHeaderModule,
    SkCardPageModule,
    UiButton,
    SkUserMenuModule,
  ],
  declarations: [SidebarPageLayout, CardPageLayout],
  exports: [SidebarPageLayout, CardPageLayout],
})
export class LayoutModule {}
