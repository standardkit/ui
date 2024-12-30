import { NgForOf, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NavigationItemInterface } from '../../../interfaces';
import { UiIcon } from '../../core';
import { LayoutService } from '../layout.service';
import { UiNavigationItem } from '../navigation-item';

@Component({
  selector: 'ui-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrl: 'sidebar.component.scss',
  imports: [NgForOf, UiIcon, NgIf, UiNavigationItem],
})
export class UiSidebar implements OnInit {
  @Input() public navigationItems: NavigationItemInterface[] = [];

  public isCollapsed: boolean = false;

  constructor(private layoutService: LayoutService) {}

  public ngOnInit(): void {
    this.layoutService.isCollapsed$().subscribe({
      next: (isCollapsed: boolean) => (this.isCollapsed = isCollapsed),
    });
  }

  public onToggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
    this.layoutService.setCollapsed(this.isCollapsed);
  }
}
