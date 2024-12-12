import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sk-select-option[value][label]',
  templateUrl: 'select-option.component.html',
  styleUrls: ['select-option.component.scss'],
  standalone: false,
})
export class SkSelectOptionComponent {
  @Input() public value!: string | number;
  @Input() public label!: string;
  @Input() public description?: string;
  @Input() public isMulti: boolean = false;
  @Input() public isSelected: boolean = false;

  @Output() public selectOption: EventEmitter<void> = new EventEmitter<void>();
  @Output() public deselectOption: EventEmitter<void> = new EventEmitter<void>();

  public onSelectOption(): void {
    this.isMulti && this.isSelected ? this.deselectOption.emit() : this.selectOption.emit();
  }
}
