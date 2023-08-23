import { Component } from '@angular/core';
import { SkBreadcrumbInterface } from '@standardkit/ui';

@Component({ templateUrl: 'modal.page.html' })
export class ModalPage {
  public breadcrumbs: SkBreadcrumbInterface[] = [{ name: 'Common' }, { name: 'Modal' }];
  public isOpen: boolean = false;

  public onToggleModal(): void {
    this.isOpen = !this.isOpen;
  }
}
