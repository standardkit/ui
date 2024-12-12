import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Observable } from 'rxjs';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'sk-sidebar-page',
  templateUrl: 'sidebar-page.component.html',
  styleUrls: ['sidebar-page.component.scss'],
  standalone: false,
})
export class SkSidebarPageComponent implements OnInit {
  @ViewChild('scroll') public scrollContainer!: ElementRef;

  public hasBottomBar$!: Observable<boolean>;

  constructor(
    private router: Router,
    private layoutService: LayoutService,
  ) {}

  public ngOnInit(): void {
    this.hasBottomBar$ = this.layoutService.hasBottomBar$();
    this.router.events.pipe(filter((event: unknown) => event instanceof NavigationEnd)).subscribe({
      next: () => {
        this.scrollContainer.nativeElement.scrollTop = 0;
      },
    });
  }
}
