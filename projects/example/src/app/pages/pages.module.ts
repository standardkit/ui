import { NgModule } from '@angular/core';
import { CommonModule } from './common';
import { CoreModule } from './core';
import { HomePage } from './home';
import { SkBottomBarModule, SkButtonModule, TopBarModule } from '@standardkit/ui';

@NgModule({
  imports: [CommonModule, CoreModule, TopBarModule, SkButtonModule, SkBottomBarModule],
  declarations: [HomePage],
  exports: [HomePage],
})
export class PagesModule {}
