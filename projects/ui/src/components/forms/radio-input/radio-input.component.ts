import { NgIf } from '@angular/common';
import {
  AfterContentInit,
  Component,
  ContentChildren,
  forwardRef,
  Input,
  OnDestroy,
  Optional,
  QueryList,
  Self,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UiAdvancedRadioOption } from '../advanced-radio-option';
import { InputComponent, InputInterface } from '../input';
import { UiInputError } from '../input-error';
import { UiRadioOption } from '../radio-option';

@Component({
  selector: 'ui-radio-input',
  templateUrl: 'radio-input.component.html',
  styleUrl: 'radio-input.component.scss',
  providers: [{ provide: InputComponent, useExisting: forwardRef(() => UiRadioInput), multi: true }],
  imports: [UiInputError, NgIf],
})
export class UiRadioInput implements ControlValueAccessor, InputInterface, AfterContentInit, OnDestroy {
  @ContentChildren(UiRadioOption) public options!: QueryList<UiRadioOption>;
  @ContentChildren(UiAdvancedRadioOption) public advancedOptions!: QueryList<UiAdvancedRadioOption>;

  @Input() public isVertical: boolean = false;

  public value?: string | null;
  public name?: string;
  public isDisabled: boolean = false;
  public subscriptions: Subscription = new Subscription();
  public onChange!: (value: string | number) => void;
  public onTouched!: () => void;

  constructor(@Optional() @Self() public control: NgControl) {
    if (control) {
      control.valueAccessor = this;
    }
  }

  public ngAfterContentInit(): void {
    this.options.forEach((option: UiRadioOption) => this.handleOption(option));
    this.advancedOptions.forEach((option: UiAdvancedRadioOption) => this.handleOption(option));
    setTimeout(() => {
      this.options.forEach((option: UiRadioOption) => this.checkIsActive(option));
      this.advancedOptions.forEach((option: UiAdvancedRadioOption) => this.checkIsActive(option));
    }, 0);
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public registerOnChange(onChange: (value: string | number | null) => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  public writeValue(value: string | null): void {
    this.value = value;
  }

  public onValueChange(value: string): void {
    this.writeValue(value);
    this.onChange(value);
    this.onTouched();
  }

  public setName(name: string): void {
    this.name = name;
  }

  private handleOption(option: UiRadioOption | UiAdvancedRadioOption): void {
    const subscription: Subscription = option.selectOption.subscribe({
      next: () => this.handleSelectOption(option),
    });
    this.subscriptions.add(subscription);
  }

  private handleSelectOption(selectedOption: UiRadioOption | UiAdvancedRadioOption): void {
    this.options.forEach((option: UiRadioOption): boolean => (option.isSelected = option === selectedOption));
    this.advancedOptions.forEach(
      (option: UiAdvancedRadioOption): boolean => (option.isSelected = option === selectedOption),
    );
    this.onValueChange(selectedOption.value);
  }

  private checkIsActive(option: UiRadioOption): void {
    option.isSelected = option.value === this.value;
  }
}
