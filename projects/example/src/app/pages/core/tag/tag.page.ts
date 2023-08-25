import { Component } from '@angular/core';
import { BreadcrumbInterface } from '@standardkit/ui';

@Component({ templateUrl: 'tag.page.html' })
export class TagPage {
  public breadcrumbs: BreadcrumbInterface[] = [{ name: 'Core' }, { name: 'Tag' }];
  public onSelectTag(): void {
    console.log('tag selected');
  }
}
