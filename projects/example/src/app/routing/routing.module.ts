import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule, PageLayout } from '../layout';
import { HomePage, PagesModule, AccordionPage, AlertPage, BarPage } from '../pages';

const routes: Routes = [
  {
    path: '',
    component: PageLayout,
    children: [
      { path: '', pathMatch: 'full', component: HomePage },
      {
        path: 'common',
        children: [
          { path: 'accordion', component: AccordionPage },
          { path: 'alert', component: AlertPage },
        ],
      },
      { path: 'core', children: [{ path: 'bar', component: BarPage }] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LayoutModule, PagesModule],
  exports: [RouterModule],
})
export class RoutingModule {}
