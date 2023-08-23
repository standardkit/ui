import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageLayout } from './page';
import { SkHeaderModule, SkSidebarModule, SkSidebarPageModule } from '@standardkit/ui';

@NgModule({
  imports: [RouterOutlet, SkSidebarPageModule, SkSidebarModule, SkHeaderModule],
  declarations: [PageLayout],
  exports: [PageLayout],
})
export class LayoutModule {}
