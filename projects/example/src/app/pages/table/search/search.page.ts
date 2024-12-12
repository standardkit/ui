import { Component } from '@angular/core';
import { BreadcrumbInterface } from '@standardkit/ui';

@Component({
  templateUrl: 'search.page.html',
  standalone: false,
})
export class SearchPage {
  public breadcrumbs: BreadcrumbInterface[] = [{ name: 'Table' }, { name: 'Search' }];
  public isField: boolean = false;
  public isDisabled: boolean = false;

  public onSearch(query: string): void {
    console.log('search for:', query);
  }

  public onClear(): void {
    console.log('search cleared');
  }

  public onToggleField(): void {
    this.isField = !this.isField;
  }

  public onToggleDisabled(): void {
    this.isDisabled = !this.isDisabled;
  }
}
