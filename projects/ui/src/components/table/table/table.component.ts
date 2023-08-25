import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  ColumnInterface,
  SortDirectionEnum,
  SortInterface,
  TableRowActionInterface,
  TableToggleActionInterface,
} from '@standardkit/core';
import { take } from 'rxjs';

@Component({
  selector: 'sk-table',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.scss'],
})
export class SkTableComponent<T> {
  @Input() public rows: (T & { isChecked?: boolean })[] = [];
  @Input() public columns: ColumnInterface<T>[] = [];
  @Input() public sortableColumns: Extract<keyof T, string>[] = [];
  @Input() public sortedColumn?: SortInterface<T>;
  @Input() public dataName?: string;
  @Input() public isStriped: boolean = false;
  @Input() public canSelectRow: boolean = false;
  @Input() public checkedRows: T[] = [];
  @Input() public canCheckRow: boolean = false;
  @Input() public actions: TableRowActionInterface<T>[] = [];
  @Input() public toggleAction?: TableToggleActionInterface<T>;

  @Output() public sortColumn: EventEmitter<SortInterface<T>> = new EventEmitter();
  @Output() public selectRow: EventEmitter<T> = new EventEmitter();
  @Output() public checkedRowsChange: EventEmitter<T[]> = new EventEmitter();

  public allChecked: boolean = false;

  private pendingIndexes: number[] = [];
  private skipToggleClick: boolean = false;

  public onSortColumn(key: Extract<keyof T, string>): void {
    if (!this.sortableColumns?.includes(key)) {
      return;
    }
    let direction: SortDirectionEnum = SortDirectionEnum.Ascending;

    if (this.sortedColumn?.key === key && this.sortedColumn.direction !== SortDirectionEnum.None) {
      direction =
        this.sortedColumn.direction === SortDirectionEnum.Ascending
          ? SortDirectionEnum.Descending
          : SortDirectionEnum.None;
    }

    this.sortColumn.emit({ key, direction });
  }

  public onRowClick(row: T): void {
    if (!this.canSelectRow) {
      return;
    }
    if (this.skipToggleClick) {
      this.skipToggleClick = false;
      return;
    }
    this.selectRow.emit(row);
  }

  public onAction(event: Event, action: TableRowActionInterface<T>, row: T): void {
    event.stopPropagation();
    action.action(row);
  }

  public onCheckAll(): void {
    this.allChecked = !this.allChecked;
    this.rows.forEach((row: T & { isChecked?: boolean }): void => {
      row.isChecked = this.allChecked;
    });
    const selectedRows: T[] = this.rows.filter((row: { isChecked?: boolean }) => !!row.isChecked);
    this.checkedRowsChange.emit(selectedRows);
  }

  public onCheckRow(event: Event, row: T & { isChecked?: boolean }): void {
    event.stopPropagation();
    row.isChecked = !row.isChecked;
    const selectedRows: T[] = this.rows.filter((row: { isChecked?: boolean }) => !!row.isChecked);
    if (selectedRows.length === this.rows.length) {
      this.allChecked = row.isChecked;
    } else {
      this.allChecked = false;
    }

    this.checkedRowsChange.emit(selectedRows);
  }

  public isPending(index: number): boolean {
    return this.pendingIndexes.includes(index);
  }

  public onToggle(row: T, index: number): void {
    this.skipToggleClick = true;
    this.pendingIndexes.push(index); // TODO : Replace with signals
    if (this.toggleAction?.isActive(row)) {
      this.toggleAction
        ?.toggleInactive(row)
        .pipe(take(1))
        .subscribe({
          next: () => this.removePending(index),
          error: () => this.removePending(index),
        });
    } else {
      this.toggleAction
        ?.toggleActive(row)
        .pipe(take(1))
        .subscribe({
          next: () => this.removePending(index),
          error: () => this.removePending(index),
        });
    }
  }

  private removePending(indexToRemove: number): void {
    const index: number = this.pendingIndexes.indexOf(indexToRemove);
    if (index === -1) {
      return;
    }
    this.pendingIndexes.splice(index, 1);
  }
}
