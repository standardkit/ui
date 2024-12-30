import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { BreadcrumbInterface, UiBar, UiBreadcrumbs, UiButton, UiModal, UiTopBar } from '@standardkit/ui';

@Component({
  imports: [UiTopBar, UiBreadcrumbs, UiButton, UiModal, UiBar, NgTemplateOutlet, NgIf],
  templateUrl: 'modal.page.html',
})
export class ModalPage {
  public breadcrumbs: BreadcrumbInterface[] = [{ name: 'Common' }, { name: 'Modal' }];
  public isOpen: boolean = false;

  public onToggleModal(): void {
    this.isOpen = !this.isOpen;
  }
}
