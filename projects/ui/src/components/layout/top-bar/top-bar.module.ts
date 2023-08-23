import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { TopBarComponent } from './top-bar.component';

@NgModule({
  declarations: [TopBarComponent],
  exports: [TopBarComponent],
  imports: [NgIf],
})
export class TopBarModule {}
