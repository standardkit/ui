import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkButtonModule, SkIconModule } from '../../core';
import { SkSearchComponent } from './search.component';

@NgModule({
  imports: [SkButtonModule, SkIconModule, FormsModule, NgIf],
  declarations: [SkSearchComponent],
  exports: [SkSearchComponent],
})
export class SkSearchModule {}
