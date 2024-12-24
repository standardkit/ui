import { IconSetType } from '../types';

export interface TableRowActionInterface<T> {
  action: (row: T) => void;
  icon?: string;
  iconSet?: IconSetType;
  label: string;
  isDisabled?: (row: T) => boolean;
}
