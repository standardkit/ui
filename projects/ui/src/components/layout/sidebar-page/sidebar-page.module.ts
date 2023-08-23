import { AsyncPipe, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkSidebarPageComponent } from './sidebar-page.component';

@NgModule({
  declarations: [SkSidebarPageComponent],
  exports: [SkSidebarPageComponent],
  imports: [AsyncPipe, NgIf],
})
export class SkSidebarPageModule {}
