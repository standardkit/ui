import { Component, Input, OnInit } from '@angular/core';
import { NavigationItemInterface } from '../../../interfaces';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'sk-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss'],
  standalone: false,
})
export class SkSidebarComponent implements OnInit {
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
