import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ui-header',
  templateUrl: 'header.component.html',
  styleUrl: 'header.component.scss',
  imports: [RouterLink, NgIf],
})
export class UiHeader {
  @Input() public logo?: string;
  @Input() public brand: string = '';

  // TODO : Add collapse on mobile
  // TODO : Make route dynamic
}
