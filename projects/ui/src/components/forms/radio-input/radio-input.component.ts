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
import { SkAdvancedRadioOptionComponent } from '../advanced-radio-option';
import { InputComponent, InputInterface } from '../input';
import { SkRadioOptionComponent } from '../radio-option';

@Component({
  selector: 'sk-radio-input',
  templateUrl: 'radio-input.component.html',
  styleUrls: ['radio-input.component.scss'],
  providers: [{ provide: InputComponent, useExisting: forwardRef(() => SkRadioInputComponent), multi: true }],
  standalone: false,
})
export class SkRadioInputComponent implements ControlValueAccessor, InputInterface, AfterContentInit, OnDestroy {
  @ContentChildren(SkRadioOptionComponent) public options!: QueryList<SkRadioOptionComponent>;
  @ContentChildren(SkAdvancedRadioOptionComponent) public advancedOptions!: QueryList<SkRadioOptionComponent>;

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
    this.options.forEach((option) => this.handleOption(option));
    this.advancedOptions.forEach((option) => this.handleOption(option));
    setTimeout(() => {
      this.options.forEach((option) => this.checkIsActive(option));
      this.advancedOptions.forEach((option) => this.checkIsActive(option));
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

  private handleOption(option: SkRadioOptionComponent): void {
    const subscription: Subscription = option.selectOption.subscribe({
      next: () => this.handleSelectOption(option),
    });
    this.subscriptions.add(subscription);
  }

  private handleSelectOption(selectedOption: SkRadioOptionComponent): void {
    this.options.forEach((option: SkRadioOptionComponent): boolean => (option.isSelected = option === selectedOption));
    this.advancedOptions.forEach(
      (option: SkRadioOptionComponent): boolean => (option.isSelected = option === selectedOption),
    );
    this.onValueChange(selectedOption.value);
  }

  private checkIsActive(option: SkRadioOptionComponent): void {
    option.isSelected = option.value === this.value;
  }
}
