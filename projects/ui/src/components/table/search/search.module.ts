import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkButtonModule, SkIconModule } from '../../core';
import { SkSearchComponent } from './search.component';

@NgModule({
  declarations: [SkSearchComponent],
  exports: [SkSearchComponent],
  imports: [SkButtonModule, SkIconModule, FormsModule, NgIf],
})
export class SkSearchModule {}
