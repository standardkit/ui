import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StyleType } from '../../../types';

@Component({
  selector: 'sk-advanced-radio-option[label][value]',
  templateUrl: 'advanced-radio-option.component.html',
  styleUrls: ['advanced-radio-option.component.scss'],
  standalone: false,
})
export class SkAdvancedRadioOptionComponent {
  @Input() public name!: string;
  @Input() public label!: string;
  @Input() public value!: string;
  @Input() public type?: StyleType;

  @Output() public selectOption: EventEmitter<void> = new EventEmitter<void>();

  public isSelected: boolean = false;

  public onSelect(): void {
    this.selectOption.emit();
  }
}
