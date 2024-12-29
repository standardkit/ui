import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StyleType } from '../../../types';
import { UiIcon } from '../../core';

@Component({
  selector: 'ui-advanced-radio-option',
  templateUrl: 'advanced-radio-option.component.html',
  styleUrl: 'advanced-radio-option.component.scss',
  imports: [NgIf, UiIcon],
})
export class UiAdvancedRadioOption {
  @Input() public name?: string;
  @Input({ required: true }) public label!: string;
  @Input({ required: true }) public value!: string;
  @Input() public type?: StyleType;

  @Output() public selectOption: EventEmitter<void> = new EventEmitter<void>();

  public isSelected: boolean = false;

  public onSelect(): void {
    this.selectOption.emit();
  }
}
