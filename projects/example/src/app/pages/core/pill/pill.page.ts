import { Component } from '@angular/core';

@Component({ templateUrl: 'pill.page.html' })
export class PillPage {
  public onSelectPill(): void {
    console.log('Pill selected');
  }
}
