import { NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiIcon } from '../../core';

@Component({
  selector: 'ui-select-search',
  templateUrl: 'select-search.component.html',
  styleUrl: 'select-search.component.scss',
  imports: [UiIcon, FormsModule, NgIf],
})
export class UiSelectSearch implements AfterViewInit {
  @ViewChild('input') public input!: ElementRef<HTMLInputElement>;

  @Output() public search: EventEmitter<string> = new EventEmitter<string>();
  @Output() public clear: EventEmitter<void> = new EventEmitter<void>();

  public query: string = '';

  public ngAfterViewInit(): void {
    setTimeout(() => this.input.nativeElement.focus(), 0);
  }

  public onClear(): void {
    this.query = '';
    this.input.nativeElement.focus();
    this.clear.emit();
  }

  public onClick(event: Event): void {
    event.stopPropagation();
  }

  public onChange(query: string): void {
    this.query = query;
    this.search.emit(query);
  }
}
