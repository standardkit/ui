import { Component } from '@angular/core';

@Component({ templateUrl: 'tab.page.html' })
export class TabPage {
  public activeTab: string = 'tab-1';

  public onActiveTabChange(tab: string): void {
    console.log(`${tab} selected`);
  }
}
