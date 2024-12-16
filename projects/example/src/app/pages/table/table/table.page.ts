import { Component } from '@angular/core';
import {
  SortableType,
  SortDirectionEnum,
  SortInterface,
  StyleType,
  TableRowActionInterface,
  TableToggleActionInterface,
} from '@standardkit/core';
import { BreadcrumbInterface, ColumnInterface } from '@standardkit/ui';
import { delay, Observable, of, tap } from 'rxjs';

export interface TestInterface {
  age: number;
  name: string;
  description?: string;
  active?: boolean;
}

@Component({
  templateUrl: 'table.page.html',
  standalone: false,
})
export class TablePage {
  public breadcrumbs: BreadcrumbInterface[] = [{ name: 'Table' }, { name: 'Pagination' }];
  public isStriped: boolean = false;
  public canSelectRow: boolean = false;
  public canCheckRow: boolean = false;
  public isEmpty: boolean = false;

  public columns: ColumnInterface<TestInterface>[] = [
    {
      icon: (row: TestInterface): string => (row.age > 100 ? 'person-cane' : row.age > 30 ? 'person' : 'baby'),
      key: 'age',
      label: '',
    },
    { key: 'name', label: 'Name', highlight: true },
    { key: 'description', label: 'Description' },
    { key: 'age', label: 'Age' },
    {
      key: 'age',
      label: 'Experience',
      status: (row: TestInterface): StyleType => (row.age > 100 ? 'special' : row.age > 30 ? 'neutral' : 'success'),
      statusIcon: (row: TestInterface): string => (row.age > 100 ? 'person-cane' : row.age > 30 ? 'person' : 'baby'),
      format: (row: TestInterface): string => (row.age > 100 ? 'Ancient' : row.age > 30 ? 'adult' : 'young'),
    },
  ];

  public rows: TestInterface[] = [
    { name: 'John Doe', age: 23, description: 'A person', active: true },
    { name: 'Joanna Doe', age: 34, description: 'Also a person' },
    { name: 'Clay Doe', age: 2, description: 'Not a real person' },
    { name: 'Superman', age: 1002, description: 'He is an alien', active: true },
    { name: 'Spiderman', age: 24, description: 'Web developer', active: true },
    { name: 'Batman', age: 48, description: 'Uses dark mode' },
  ];

  public sortedColumn: SortInterface<TestInterface> = { key: 'description', direction: SortDirectionEnum.Ascending };
  public sortableColumns: SortableType<TestInterface>[] = ['name', 'description'];
  public checkedRows: TestInterface[] = [];
  public toggleAction: TableToggleActionInterface<TestInterface> = {
    label: 'Active',
    activateLabel: 'Activate', // TODO : Add support for these for accessibility
    inactivateLabel: 'Deactivate', // TODO : Add support for these for accessibility
    isActive: (row: TestInterface): boolean => !!row.active,
    toggleActive: (row: TestInterface): Observable<void> => {
      return of(undefined).pipe(
        delay(1000),
        tap((): boolean => (row.active = true)),
      );
    },
    toggleInactive: (row: TestInterface): Observable<void> => {
      return of(undefined).pipe(
        delay(1000),
        tap((): boolean => (row.active = false)),
      );
    },
  };

  public actions: TableRowActionInterface<TestInterface>[] = [
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    { icon: 'edit', iconSet: 'regular', label: 'Update', action: (): void => {} },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    { icon: 'trash-can', iconSet: 'regular', label: 'Favoriet maken', action: (): void => {} },
  ];

  public onToggleStriped(): void {
    this.isStriped = !this.isStriped;
  }

  public onToggleClickable(): void {
    this.canSelectRow = !this.canSelectRow;
  }

  public onSelectRow(row: TestInterface): void {
    console.log('selected row:', row);
  }

  public onSortColumn(sortedColumn: SortInterface<TestInterface>): void {
    this.sortedColumn = sortedColumn;
  }

  public onCheckedRowsChange(): void {
    console.log('checked rows:', this.checkedRows);
  }

  public onToggleCheckable(): void {
    this.canCheckRow = !this.canCheckRow;
  }

  public onToggleEmpty(): void {
    this.isEmpty = !this.isEmpty;
  }
}
