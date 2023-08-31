import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkIconModule } from '../../core';
import { SkUserMenuComponent } from './user-menu.component';

@NgModule({
  imports: [SkIconModule, NgIf, NgForOf],
  declarations: [SkUserMenuComponent],
  exports: [SkUserMenuComponent],
})
export class SkUserMenuModule {}
