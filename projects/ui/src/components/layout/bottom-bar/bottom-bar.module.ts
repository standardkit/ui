import { AsyncPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkBottomBarComponent } from './bottom-bar.component';

@NgModule({
  imports: [AsyncPipe],
  declarations: [SkBottomBarComponent],
  exports: [SkBottomBarComponent],
})
export class SkBottomBarModule {}
