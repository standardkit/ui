import { SubNavigationItemInterface } from './sub-navigation-item.interface';

export interface NavigationItemInterface {
  isExact?: boolean;
  icon: string;
  name: string;
  route: string;
  children?: SubNavigationItemInterface[];
}
