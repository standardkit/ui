import { AsyncPipe, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkSidebarPageComponent } from './sidebar-page.component';

@NgModule({
  imports: [AsyncPipe, NgIf],
  declarations: [SkSidebarPageComponent],
  exports: [SkSidebarPageComponent],
})
export class SkSidebarPageModule {}
