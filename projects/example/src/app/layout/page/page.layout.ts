import { Component } from '@angular/core';
import { NavigationItemInterface } from '@standardkit/ui';

@Component({ selector: 'example-page-layout', templateUrl: 'page.layout.html' })
export class PageLayout {
  public navigationItems: NavigationItemInterface[] = [
    { icon: 'house', name: 'Homepage', route: '', isExact: true },
    {
      icon: 'box-archive',
      name: 'Common',
      route: 'common', // TODO : Make as prefix for child routes
      children: [
        { name: 'Accordion', route: 'common/accordion' },
        { name: 'Alert', route: 'common/alert' },
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
      ],
    },
  ];
}
