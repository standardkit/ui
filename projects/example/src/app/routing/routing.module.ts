import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule, PageLayout } from '../layout';
import { HomePage, PagesModule } from '../pages';

const routes: Routes = [{ path: '', component: PageLayout, children: [{ path: '', component: HomePage }] }];

@NgModule({
  imports: [RouterModule.forRoot(routes), LayoutModule, PagesModule],
  exports: [RouterModule],
})
export class RoutingModule {}
