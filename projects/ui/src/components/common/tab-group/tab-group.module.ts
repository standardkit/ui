import { NgForOf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkTabGroupComponent } from './tab-group.component';

@NgModule({
  imports: [NgForOf],
  declarations: [SkTabGroupComponent],
  exports: [SkTabGroupComponent],
})
export class SkTabGroupModule {}
