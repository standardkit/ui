import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UiIcon } from '../../core';

@Component({
  selector: 'ui-radio-option',
  templateUrl: 'radio-option.component.html',
  styleUrl: 'radio-option.component.scss',
  imports: [UiIcon, NgIf],
})
export class UiRadioOption {
  @Input() public name?: string;
  @Input({ required: true }) public value!: string;

  @Output() public selectOption: EventEmitter<void> = new EventEmitter<void>();

  public isSelected: boolean = false;

  public onSelect(): void {
    this.selectOption.emit();
  }
}
