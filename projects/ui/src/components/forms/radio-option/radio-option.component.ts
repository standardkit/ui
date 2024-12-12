import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sk-radio-option[value]',
  templateUrl: 'radio-option.component.html',
  styleUrls: ['radio-option.component.scss'],
  standalone: false,
})
export class SkRadioOptionComponent {
  @Input() public name!: string;
  @Input() public value!: string;

  @Output() public selectOption: EventEmitter<void> = new EventEmitter<void>();

  public isSelected: boolean = false;

  public onSelect(): void {
    this.selectOption.emit();
  }
}
