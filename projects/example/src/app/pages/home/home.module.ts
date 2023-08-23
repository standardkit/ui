import { NgModule } from '@angular/core';
import { HomePage } from './home.page';
import { SkBottomBarModule, SkButtonModule, TopBarModule } from '@standardkit/ui';

@NgModule({ imports: [TopBarModule, SkButtonModule, SkBottomBarModule], declarations: [HomePage], exports: [HomePage] })
export class HomeModule {}
