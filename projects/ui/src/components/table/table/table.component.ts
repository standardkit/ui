import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  SortDirectionEnum,
  SortInterface,
  TableRowActionInterface,
  TableToggleActionInterface,
} from '@standardkit/core';
import { ColumnInterface } from '@standardkit/ui';
import { take } from 'rxjs';

@Component({
  selector: 'sk-table',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.scss'],
  standalone: false,
})
export class SkTableComponent<T> {
  @Input() public rows: T[] = [];
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
  @Input() public isLoading: boolean = false;

  @Output() public sortColumn: EventEmitter<SortInterface<T>> = new EventEmitter<SortInterface<T>>();
  @Output() public selectRow: EventEmitter<T> = new EventEmitter<T>();
  @Output() public checkedRowsChange: EventEmitter<T[]> = new EventEmitter<T[]>();

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
    if (this.allChecked) {
      this.checkedRows = this.allChecked ? this.rows : [];
    }
    this.checkedRowsChange.emit(this.checkedRows);
  }

  public onCheckRow(event: Event, row: T): void {
    event.stopPropagation();
    if (this.checkedRows.includes(row)) {
      this.checkedRows = this.checkedRows.filter((checkedRow: T): boolean => checkedRow !== row);
      this.allChecked = false;
    } else {
      this.checkedRows.push(row);
      if (this.checkedRows.length === this.rows.length) {
        this.allChecked = true;
      }
    }

    this.checkedRowsChange.emit(this.checkedRows);
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
