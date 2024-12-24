import { IconSetType, StyleType } from '../types';

export interface ColumnInterface<T> {
  key: Extract<keyof T, string>;
  label: string;
  icon?: (row: T) => string;
  iconSet?: (row: T) => IconSetType;
  highlight?: boolean;
  format?: (row: T) => string;
  status?: (row: T) => StyleType | undefined;
  statusIcon?: (row: T) => string | undefined;
  statusIconSet?: (row: T) => IconSetType | undefined;
}
