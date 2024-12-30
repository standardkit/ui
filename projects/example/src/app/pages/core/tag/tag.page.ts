import { Component } from '@angular/core';
import { BreadcrumbInterface, UiBar, UiBreadcrumbs, UiCard, UiColumn, UiRow, UiTag, UiTopBar } from '@standardkit/ui';

@Component({
  imports: [UiTopBar, UiBreadcrumbs, UiRow, UiColumn, UiCard, UiBar, UiTag],
  templateUrl: 'tag.page.html',
})
export class TagPage {
  public breadcrumbs: BreadcrumbInterface[] = [{ name: 'Core' }, { name: 'Tag' }];
  public onSelectTag(): void {
    console.log('tag selected');
  }
}
