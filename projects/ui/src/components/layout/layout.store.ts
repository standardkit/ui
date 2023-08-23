import { Injectable } from '@angular/core';

// TODO : Make it work with multiple tabs (store per page?)
const COLLAPSE_KEY: string = 'sk_sidebar_collapse';

@Injectable({ providedIn: 'root' })
export class LayoutStore {
  public getCollapsed(): boolean {
    return localStorage.getItem(COLLAPSE_KEY) !== null;
  }

  public setCollapsed(isCollapsed: boolean): void {
    isCollapsed ? localStorage.setItem(COLLAPSE_KEY, 'true') : localStorage.removeItem(COLLAPSE_KEY);
  }
}
