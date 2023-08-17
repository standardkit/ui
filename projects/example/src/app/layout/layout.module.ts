import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageLayout } from './page';

@NgModule({
  imports: [RouterOutlet],
  declarations: [PageLayout],
  exports: [PageLayout],
})
export class LayoutModule {}
