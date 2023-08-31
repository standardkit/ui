import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardPageLayout } from './card-page';
import { SidebarPageLayout } from './sidebar-page';
import {
  SkButtonModule,
  SkCardPageModule,
  SkHeaderModule,
  SkSidebarModule,
  SkSidebarPageModule,
  SkUserMenuModule,
} from '@standardkit/ui';

@NgModule({
  imports: [
    RouterOutlet,
    SkSidebarPageModule,
    SkSidebarModule,
    SkHeaderModule,
    SkCardPageModule,
    SkButtonModule,
    SkUserMenuModule,
  ],
  declarations: [SidebarPageLayout, CardPageLayout],
  exports: [SidebarPageLayout, CardPageLayout],
})
export class LayoutModule {}
