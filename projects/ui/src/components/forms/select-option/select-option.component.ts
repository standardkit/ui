import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UiIcon } from '../../core';

@Component({
  selector: 'ui-select-option',
  templateUrl: 'select-option.component.html',
  styleUrl: 'select-option.component.scss',
  imports: [UiIcon, NgIf],
})
export class UiSelectOption {
  @Input({ required: true }) public value!: string | number;
  @Input({ required: true }) public label!: string;
  @Input() public description?: string;
  @Input() public isMulti: boolean = false;
  @Input() public isSelected: boolean = false;

  @Output() public selectOption: EventEmitter<void> = new EventEmitter<void>();
  @Output() public deselectOption: EventEmitter<void> = new EventEmitter<void>();

  public onSelectOption(): void {
    this.isMulti && this.isSelected ? this.deselectOption.emit() : this.selectOption.emit();
  }
}
