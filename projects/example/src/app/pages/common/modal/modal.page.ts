import { Component } from '@angular/core';
import { BreadcrumbInterface } from '@standardkit/ui';

@Component({ templateUrl: 'modal.page.html' })
export class ModalPage {
  public breadcrumbs: BreadcrumbInterface[] = [{ name: 'Common' }, { name: 'Modal' }];
  public isOpen: boolean = false;

  public onToggleModal(): void {
    this.isOpen = !this.isOpen;
  }
}
