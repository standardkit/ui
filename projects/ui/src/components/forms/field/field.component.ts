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
import { SkLabelComponent } from '../label';

@Component({
  selector: 'sk-field[name]',
  templateUrl: 'field.component.html',
  styleUrls: ['field.component.scss'],
  standalone: false,
})
export class SkFieldComponent implements AfterContentInit {
  @HostBinding('class') public class: string = 'field';

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

  @ContentChildren(InputComponent) public inputs!: QueryList<InputInterface>;

  @ContentChild(SkLabelComponent) public label?: SkLabelComponent;

  @Input() public name!: string;
  @Input() public width?: 'narrow' | 'medium' | 'wide';

  public ngAfterContentInit(): void {
    if (this.label) {
      this.label.for = this.name;
    }
    this.inputs.forEach((input: InputComponent): void => {
      input.setName(this.name);
    });
  }
}
