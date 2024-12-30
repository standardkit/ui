import { Routes } from '@angular/router';
import { CardPageLayout, SidebarPageLayout } from './layout';
import {
  AccordionPage,
  AlertPage,
  BarPage,
  ButtonPage,
  CardPage,
  CheckboxInputPage,
  DataTablePage,
  FormPage,
  HomePage,
  IconPage,
  LinkPage,
  ListPage,
  LoginPage,
  ModalPage,
  PaginationPage,
  PillPage,
  RichTextPage,
  SearchPage,
  SegmentPage,
  StatisticsCardPage,
  StepperPage,
  TablePage,
  TabPage,
  TagPage,
  TogglePage,
} from './pages';

export const routes: Routes = [
  { path: 'authentication', component: CardPageLayout, children: [{ path: 'login', component: LoginPage }] },
  {
    path: '',
    component: SidebarPageLayout,
    children: [
      { path: '', pathMatch: 'full', component: HomePage },
      {
        path: 'common',
        children: [
          { path: 'accordion', component: AccordionPage },
          { path: 'alert', component: AlertPage },
          { path: 'card', component: CardPage },
          { path: 'list', component: ListPage },
          { path: 'modal', component: ModalPage },
          { path: 'rich-text', component: RichTextPage },
          { path: 'segment', component: SegmentPage },
          { path: 'statistics-card', component: StatisticsCardPage },
          { path: 'stepper', component: StepperPage },
          { path: 'tab', component: TabPage },
        ],
      },
      {
        path: 'core',
        children: [
          { path: 'bar', component: BarPage },
          { path: 'button', component: ButtonPage },
          { path: 'icon', component: IconPage },
          { path: 'link', component: LinkPage },
          { path: 'pill', component: PillPage },
          { path: 'tag', component: TagPage },
          { path: 'toggle', component: TogglePage },
        ],
      },
      {
        path: 'form',
        children: [
          { path: 'checkbox-input', component: CheckboxInputPage },
          { path: 'form', component: FormPage },
        ],
      },
      {
        path: 'table',
        children: [
          { path: 'data-table', component: DataTablePage },
          { path: 'pagination', component: PaginationPage },
          { path: 'search', component: SearchPage },
          { path: 'table', component: TablePage },
        ],
      },
    ],
  },
];
