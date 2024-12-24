import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import {
  ColumnInterface,
  FilterConfigurationInterface,
  SegmentConfigurationInterface,
  SegmentInterface,
  TableBatchActionInterface,
  TableRowActionInterface,
  TableToggleActionInterface,
} from '@lib/interfaces';
import {
  DataRequest,
  DataResponse,
  FilterInterface,
  PaginationInterface,
  SearchableKeyType,
  SortInterface,
} from '@standardkit/core';

@Component({
  selector: 'sk-data-table',
  templateUrl: 'data-table.component.html',
  styleUrls: ['data-table.component.scss'],
  standalone: false,
})
export class SkDataTableComponent<T> implements OnInit, OnChanges {
  @Input() public response?: DataResponse<T>;
  @Input() public columns: ColumnInterface<T>[] = [];
  @Input() public filters: FilterConfigurationInterface<T>[] = [];
  @Input() public defaultFilters: FilterInterface<T>[] = [];
  @Input() public defaultSort?: SortInterface<T>;
  @Input() public segments?: SegmentConfigurationInterface<T>;
  @Input() public batchActions: TableBatchActionInterface<T>[] = [];
  @Input() public rowActions: TableRowActionInterface<T>[] = [];
  @Input() public toggleAction?: TableToggleActionInterface<T>;
  @Input() public searchKey?: SearchableKeyType<T>;
  @Input() public multiSearch: boolean = false;
  @Input() public dataName?: string;
  @Input() public isStriped: boolean = false;
  @Input() public hasNoMargin: boolean = false;

  @Output() public request: EventEmitter<DataRequest<T>> = new EventEmitter<DataRequest<T>>();
  @Output() public rowClick: EventEmitter<T> = new EventEmitter<T>();

  public searchField?: string;
  public checkedRows: T[] = [];
  public initialSegmentValue?: string;
  public isPending: boolean = false;

  private _request: DataRequest<T> = { pagination: { offset: 0, limit: 10 } };

  public ngOnInit(): void {
    if (this.searchKey && !this.multiSearch) {
      const searchColumn: ColumnInterface<T> | undefined = this.columns.find(
        (row: ColumnInterface<T>): boolean => row.key === this.searchKey,
      );
      this.searchField = searchColumn?.label;
    }
    this.loadSegments();
    this.loadDefaultFilters();
    this.loadDefaultSort();
    this.sendRequest();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['response'] && this.response) {
      this.isPending = false;
      this._request.sort = this.response.sort;
    }
  }

  public onSort(sort: SortInterface<T>): void {
    this._request.sort = sort;
    this._request.pagination.offset = 0;
    this.sendRequest();
  }

  public onSearch(query: string): void {
    if (!this.searchKey) {
      throw new Error('SearchKey not provided...');
    }
    this._request.search = { key: this.searchKey, query };
    this._request.pagination.offset = 0;
    this.sendRequest();
  }

  public onClearSearch(): void {
    delete this._request.search;
    this._request.pagination.offset = 0;
    this.sendRequest();
  }

  public onFilter(filters: FilterInterface<T>[]): void {
    const keys = this.filters.map((filter: FilterConfigurationInterface<T>) => filter.key);
    const otherFilters =
      this._request.filters?.filter((filter: FilterInterface<T>) => !keys.includes(filter.key)) ?? [];
    this._request.filters = [...otherFilters, ...filters];
    this._request.pagination.offset = 0;
    this.sendRequest();
  }

  public onPagination(pagination: PaginationInterface): void {
    this._request.pagination = pagination;
    this.sendRequest();
  }

  public onRowClick(row: T): void {
    this.rowClick.emit(row);
  }

  public onBatchAction(action: TableBatchActionInterface<T>): void {
    action.action(this.checkedRows);
  }

  public onSelectSegment(segment: SegmentInterface): void {
    if (!this.segments?.key) {
      throw new Error('Segment key not found...');
    }
    this._request.pagination.offset = 0;

    if (!this._request.filters) {
      this._request.filters = [];
    }
    const filter: FilterInterface<T> | undefined = this._request.filters.find(
      (filter: FilterInterface<T>): boolean => filter.key === this.segments?.key,
    );

    filter
      ? (filter.value = segment.value)
      : this._request.filters.push({ key: this.segments?.key, value: segment.value });

    this.sendRequest();
  }

  public filterSegments(filters: FilterInterface<T>[]): FilterInterface<T>[] {
    return filters.filter((filter: FilterInterface<T>) => !this.segments || filter.key !== this.segments.key);
  }

  private sendRequest(): void {
    this.response = undefined;
    this.isPending = true;
    this.request.emit(this._request);
  }

  private loadSegments(): void {
    if (!this.segments || this.segments.segments.length === 0) {
      return;
    }
    if (!this._request.filters) {
      this._request.filters = [];
    }
    const filter: FilterInterface<T> | undefined = this._request.filters.find(
      (filter: FilterInterface<T>): boolean => filter.key === this.segments?.key,
    );

    filter
      ? (filter.value = this.segments.segments[0].value)
      : this._request.filters.push({ key: this.segments.key, value: this.segments.segments[0].value });
  }

  private loadDefaultFilters(): void {
    if (!this.defaultFilters) {
      return;
    }

    if (!this._request.filters) {
      this._request.filters = [];
    }

    this.defaultFilters.forEach((defaultFilter: FilterInterface<T>) => {
      const filter: FilterInterface<T> | undefined = this._request.filters?.find(
        (filter: FilterInterface<T>): boolean => filter.key === defaultFilter.key,
      );
      if (filter) {
        filter.value = defaultFilter.value;
      } else {
        this._request.filters?.push({ ...defaultFilter });
      }
    });
  }

  private loadDefaultSort(): void {
    if (!this.defaultSort) {
      return;
    }
    this._request.sort = { ...this.defaultSort };
  }
}
