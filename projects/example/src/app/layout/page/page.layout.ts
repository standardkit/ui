import { Component } from '@angular/core';
import { NavigationItemInterface } from '@standardkit/ui';

@Component({ selector: 'example-page-layout', templateUrl: 'page.layout.html' })
export class PageLayout {
  public navigationItems: NavigationItemInterface[] = [
    { icon: 'house', name: 'Homepage', route: 'dashboard' }, // TODO : Figure out pathmatch full option
    {
      icon: 'box-archive',
      name: 'Common',
      route: 'common', // TODO : Make optional or use as prefix for child routes
      // TODO : rename subitems to children just like in angular
      subNavigationItems: [
        { name: 'accordion', route: 'common/accordion' },
        { name: 'alert', route: 'common/alert' },
      ],
    },
    {
      icon: 'code-fork',
      name: 'Core',
      route: 'core',
      subNavigationItems: [
        { name: 'bar', route: 'core/bar' },
        { name: 'button', route: 'core/button' },
        { name: 'icon', route: 'core/icon' },
        { name: 'link', route: 'core/link' },
      ],
    },
  ];
}
