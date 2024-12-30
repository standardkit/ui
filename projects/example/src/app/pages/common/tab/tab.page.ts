import { Component } from '@angular/core';
import { UiTab, UiTabGroup, UiTopBar } from '@standardkit/ui';

@Component({
  imports: [UiTopBar, UiTabGroup, UiTab],
  templateUrl: 'tab.page.html',
})
export class TabPage {
  public activeTab: string = 'tab-1';

  public onActiveTabChange(tab: string): void {
    console.log(`${tab} selected`);
  }
}
