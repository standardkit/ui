import { NgForOf, NgIf } from '@angular/common';
import { Component, forwardRef, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { UiButton, UiIcon } from '../../core';
import { InputComponent, InputInterface } from '../input';
import { UiInputError } from '../input-error';

@Component({
  selector: 'ui-file-input',
  templateUrl: 'file-input.component.html',
  styleUrl: 'file-input.component.scss',
  providers: [{ provide: InputComponent, useExisting: forwardRef(() => UiFileInput), multi: true }],
  imports: [UiIcon, UiButton, NgIf, NgForOf, UiInputError],
})
export class UiFileInput implements ControlValueAccessor, InputInterface {
  @Input() public placeholder: string = '';
  @Input() public canSelectMultiple: boolean = false;
  @Input() public allowedMimeTypes?: string[];

  public value: File[] = [];
  public name?: string;
  public isDisabled: boolean = false;
  public hasDragOver: boolean = false;
  public onChange!: (value: File[]) => void;
  public onTouched!: () => void;

  constructor(@Optional() @Self() public control: NgControl) {
    if (control) {
      control.valueAccessor = this;
    }
  }

  public registerOnChange(onChange: (value: File[]) => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  public writeValue(value: File[] | null): void {
    this.value = value ?? [];
  }

  public setName(name: string): void {
    this.name = name;
  }

  // TODO : reduce nested if else complexity
  public addFiles(files: File[]): void {
    if (this.canSelectMultiple) {
      if (this.allowedMimeTypes) {
        const allowedFiles = files.filter((file: File) => this.allowedMimeTypes?.includes(file.type));
        if (allowedFiles.length === 0) {
          // TODO : Push event, add output
          // this.notificationService.notify({ type: Status.Error, message: 'file type not permitted!' });
        } else if (allowedFiles.length < files.length) {
          // TODO : Push event, add output
          // this.notificationService.notify({
          //   type: Status.Warning,
          //   message: 'too much files'
          // });
          this.value.push(...allowedFiles);
        }
      } else {
        this.value.push(...files);
      }
    } else {
      const value: File[] = files.slice(0, 1);
      if (!this.allowedMimeTypes || this.allowedMimeTypes.includes(value[0].type)) {
        this.value = value;
      } else {
        // TODO : Push event, add output
        // this.notificationService.notify({ type: StatusEnum.Error, message: 'Bestandstype niet toegestaan!' });
      }
    }
    this.onChange(this.value);
    this.onTouched();
  }

  public onValueChange(event: Event): void {
    const element = event.target as HTMLInputElement; // Casting because we always have an input element
    const fileList = element.files as FileList; // Casting because we always have a input[type=file]
    const files = Array.from(fileList);
    this.addFiles(files);
  }

  public onDeleteFile(index: number): void {
    this.value.splice(index, 1);
    this.onChange(this.value);
    this.onTouched();
  }

  public onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopImmediatePropagation();

    const dataTransfer: DataTransfer = event.dataTransfer as DataTransfer;
    const fileList: FileList = dataTransfer.files as FileList;
    const files: File[] = Array.from(fileList);
    this.addFiles(files);

    this.hasDragOver = false;
  }

  public onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.hasDragOver = true;
  }

  public onDragLeave(): void {
    this.hasDragOver = false;
  }
}
