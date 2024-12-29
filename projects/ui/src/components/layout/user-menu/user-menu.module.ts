import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiIcon } from '../../core';
import { SkUserMenuComponent } from './user-menu.component';

@NgModule({
  imports: [UiIcon, NgIf, NgForOf],
  declarations: [SkUserMenuComponent],
  exports: [SkUserMenuComponent],
})
export class SkUserMenuModule {}
