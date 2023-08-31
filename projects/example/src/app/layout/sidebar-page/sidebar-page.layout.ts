import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationItemInterface, UserMenuItemInterface } from '@standardkit/ui';

@Component({ selector: 'example-page-layout', templateUrl: 'sidebar-page.layout.html' })
export class SidebarPageLayout {
  public navigationItems: NavigationItemInterface[] = [
    { icon: 'house', name: 'Homepage', route: '', isExact: true },
    {
      icon: 'box-archive',
      name: 'Common',
      route: 'common', // TODO : Make as prefix for child routes
      children: [
        { name: 'Accordion', route: 'common/accordion' },
        { name: 'Alert', route: 'common/alert' },
        { name: 'Card', route: 'common/card' },
        { name: 'List', route: 'common/list' },
        { name: 'Modal', route: 'common/modal' },
        { name: 'Rich Text', route: 'common/rich-text' },
        { name: 'Segment', route: 'common/segment' },
        { name: 'Statistics Card', route: 'common/statistics-card' },
        { name: 'Stepper', route: 'common/stepper' },
        { name: 'Tab', route: 'common/tab' },
      ],
    },
    {
      icon: 'code-fork',
      name: 'Core',
      route: 'core',
      children: [
        { name: 'Bar', route: 'core/bar' },
        { name: 'Button', route: 'core/button' },
        { name: 'Icon', route: 'core/icon' },
        { name: 'Link', route: 'core/link' },
        { name: 'Pill', route: 'core/pill' },
        { name: 'Tag', route: 'core/tag' },
        { name: 'Toggle', route: 'core/toggle' },
      ],
    },
    {
      icon: 'list-check',
      name: 'Form',
      route: 'form',
      children: [
        { name: 'Checkbox Input', route: 'form/checkbox-input' },
        { name: 'Form', route: 'form/form' },
      ],
    },
    {
      icon: 'list',
      name: 'Table',
      route: 'table',
      children: [
        { name: 'Pagination', route: 'table/pagination' },
        { name: 'Search', route: 'table/search' },
        { name: 'Table', route: 'table/table' },
      ],
    },
  ];

  public userMenuItems: UserMenuItemInterface[] = [
    { name: 'Logout', icon: 'arrow-right-from-bracket', action: (): void => this.onLogout() },
    { name: 'Logout', icon: 'arrow-right-from-bracket', action: (): void => this.onLogout() },
    { name: 'Logout', icon: 'arrow-right-from-bracket', action: (): void => this.onLogout() },
  ];

  constructor(private router: Router) {}

  public onLogout(): void {
    this.router.navigate(['authentication', 'login']).then((): void => {});
  }
}
