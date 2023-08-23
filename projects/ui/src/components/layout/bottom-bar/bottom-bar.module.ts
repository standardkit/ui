import { AsyncPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkBottomBarComponent } from './bottom-bar.component';

@NgModule({
  declarations: [SkBottomBarComponent],
  exports: [SkBottomBarComponent],
  imports: [AsyncPipe],
})
export class SkBottomBarModule {}
