import { Component } from '@angular/core';
import { UiBar, UiButton, UiColumn, UiRow, UiToggle, UiTopBar } from '@standardkit/ui';

@Component({
  imports: [UiTopBar, UiButton, UiRow, UiColumn, UiToggle, UiBar],
  templateUrl: 'toggle.page.html',
})
export class TogglePage {
  public isActive: boolean = false;
  public isDisabled: boolean = false;
  public isPending: boolean = false;

  public onToggle(): void {
    this.isPending = true;
    setTimeout((): void => {
      this.isPending = false;
      this.isActive = !this.isActive;
    }, 1000);
  }
}
