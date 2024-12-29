import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  HostBinding,
  Input,
  QueryList,
} from '@angular/core';
import { InputComponent, InputInterface } from '../input';
import { UiLabel } from '../label';

@Component({
  selector: 'ui-field',
  templateUrl: 'field.component.html',
  styleUrl: 'field.component.scss',
})
export class UiField implements AfterContentInit {
  @HostBinding('class') public class: string = 'field';

  @ContentChildren(InputComponent) public inputs!: QueryList<InputInterface>;

  @ContentChild(UiLabel) public label?: UiLabel;

  @Input({ required: true }) public name!: string;
  @Input() public width?: 'narrow' | 'medium' | 'wide';

  @HostBinding('class.field--wide')
  public get wideClass(): boolean {
    return this.width === 'wide';
  }

  @HostBinding('class.field--narrow')
  public get narrowClass(): boolean {
    return this.width === 'narrow';
  }

  @HostBinding('class.field--medium')
  public get mediumClass(): boolean {
    return this.width === 'medium';
  }

  public ngAfterContentInit(): void {
    if (this.label) {
      this.label.for = this.name;
    }
    this.inputs.forEach((input: InputComponent): void => {
      input.setName(this.name);
    });
  }
}
