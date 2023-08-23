import { NgModule } from '@angular/core';
import { SkSegmentComponent } from './segment.component';

// TODO : Combine this and the group into 1 module for easy import for consuming applications

@NgModule({
  declarations: [SkSegmentComponent],
  exports: [SkSegmentComponent],
})
export class SkSegmentModule {}
