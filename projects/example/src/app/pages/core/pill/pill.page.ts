import { Component } from '@angular/core';
import { UiBar, UiColumn, UiPill, UiRow, UiTopBar } from '@standardkit/ui';

@Component({
  imports: [UiTopBar, UiRow, UiColumn, UiPill, UiBar],
  templateUrl: 'pill.page.html',
})
export class PillPage {
  public onSelectPill(): void {
    console.log('Pill selected');
  }
}
