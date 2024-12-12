import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  FilterableInterface,
  FilterConfigurationInterface,
  FilterInterface,
  State,
  StateEnum,
} from '@standardkit/core';
import { FilterItemInterface } from './filter-item.interface';

@Component({
  selector: 'sk-filter',
  templateUrl: 'filter.component.html',
  styleUrls: ['filter.component.scss'],
  standalone: false,
})
export class SkFilterComponent<T> implements OnInit {
  @Input() public filterConfigurations: FilterConfigurationInterface<T>[] = [];
  @Input() public options: FilterableInterface<T>[] = [];
  @Input() public filters: FilterInterface<T>[] = [];
  @Input() public dataName?: string = '';
  @Input() public isLoading: boolean = false;

  @Output() public filter: EventEmitter<FilterInterface<T>[]> = new EventEmitter<FilterInterface<T>[]>();

  public showModal: boolean = false;
  public form: FormGroup = new FormGroup({});
  public filterItems: FilterItemInterface[] = [];

  public ngOnInit(): void {
    this.loadForm();
    this.loadFilterItems();
  }

  public onCancel(): void {
    this.resetFormValues();
    this.showModal = false;
  }

  public onReset(): void {
    this.form.reset();
    this.showModal = false;
    this.filter.emit([]);
  }

  public onTagClear(): void {
    this.form.reset();
    this.filter.emit([]);
  }

  public onApplyFilters(): void {
    const filters: FilterInterface<T>[] = [];

    this.filterItems.forEach((item: FilterItemInterface): void => {
      const value = this.form.get(item.key)?.value;

      if (!!value && value?.length !== 0) {
        filters.push({ key: item.key, value });
      }
    });
    this.filter.emit(filters);
    this.showModal = false;
  }

  private loadForm(): void {
    this.filterConfigurations.forEach((configuration: FilterConfigurationInterface<T>) => {
      this.form.addControl(configuration.key, new FormControl());
    });
  }

  private loadFilterItems(): void {
    this.filterConfigurations.forEach((filterConfiguration: FilterConfigurationInterface<T>) => {
      const filterOption: FilterableInterface<T> = this.getOption(filterConfiguration.key);

      const item: FilterItemInterface = {
        key: filterConfiguration.key,
        label: filterConfiguration.label,
        type: filterOption.type,
        values: filterOption.values ?? [],
        state: new State(StateEnum.Pending),
      };
      this.filterItems.push(item);

      // TODO : Handle observable filters with values$

      item.state.onSuccess();
      this.setFormValue(filterConfiguration.key);
    });
  }

  public getOption(key: string): FilterableInterface<T> {
    const filterable: FilterableInterface<T> | undefined = this.options.find(
      (option: FilterableInterface<T>): boolean => option.key === key,
    );

    if (!filterable) {
      throw new Error(`Filter with key: '${key}' is not available`);
    }

    return filterable;
  }

  private setFormValue(key: string): void {
    const appliedFilter: FilterInterface<T> | undefined = this.filters.find(
      (filter: FilterInterface<T>): boolean => filter.key === key,
    );

    if (appliedFilter) {
      this.form.get(key)?.setValue(appliedFilter.value);
    }
  }

  private resetFormValues(): void {
    this.filters.forEach((filter: FilterInterface<T>): void => {
      const filterConfiguration: FilterConfigurationInterface<T> | undefined = this.filterConfigurations.find(
        (configuration: FilterConfigurationInterface<T>): boolean => configuration.key === filter.key,
      );
      if (filterConfiguration) {
        this.form.get(filter.key)?.setValue(filter.value);
      }
    });
  }
}
