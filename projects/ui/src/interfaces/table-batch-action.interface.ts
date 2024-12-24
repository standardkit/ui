import { IconSetType } from '../types';

export interface TableBatchActionInterface<T> {
  action: (rows: T[]) => void;
  icon?: string;
  iconSet?: IconSetType;
  label: string;
}
