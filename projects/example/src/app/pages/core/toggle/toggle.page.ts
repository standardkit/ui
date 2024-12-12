import { Component } from '@angular/core';

@Component({
  templateUrl: 'toggle.page.html',
  standalone: false,
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
