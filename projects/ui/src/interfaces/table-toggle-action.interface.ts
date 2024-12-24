import { Observable } from 'rxjs';

export interface TableToggleActionInterface<T> {
  label: string;
  activateLabel: string;
  inactivateLabel: string;
  isActive: (row: T) => boolean;
  toggleActive: (row: T) => Observable<any>; // We allow any to avoid extra unnecessary mappings by consumer
  toggleInactive: (row: T) => Observable<any>; // We allow any to avoid extra unnecessary mappings by consumer
}
