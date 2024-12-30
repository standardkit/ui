import { NgForOf, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FilterableInterface, FilterInterface } from '@standardkit/core';
import { FilterConfigurationInterface } from '../../../interfaces';
import { UiModal } from '../../common';
import { UiBar, UiButton } from '../../core';
import { UiDateInput, UiField, UiForm, UiLabel, UiMultiSelectInput, UiSelectInput, UiSelectOption } from '../../forms';
import { FilterItemInterface } from './filter-item.interface';

@Component({
  selector: 'ui-filter',
  templateUrl: 'filter.component.html',
  styleUrl: 'filter.component.scss',
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    UiButton,
    UiForm,
    UiModal,
    UiBar,
    UiDateInput,
    UiField,
    UiLabel,
    UiMultiSelectInput,
    UiSelectInput,
    UiSelectOption,
  ],
})
export class UiFilter<T> implements OnInit {
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

  public getOption(key: string): FilterableInterface<T> {
    const filterable: FilterableInterface<T> | undefined = this.options.find(
      (option: FilterableInterface<T>): boolean => option.key === key,
    );

    if (!filterable) {
      throw new Error(`Filter with key: '${key}' is not available`);
    }

    return filterable;
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
        isPending: true,
      };
      this.filterItems.push(item);

      // TODO : Handle observable filters with values$

      item.isPending = false;
      this.setFormValue(filterConfiguration.key);
    });
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
