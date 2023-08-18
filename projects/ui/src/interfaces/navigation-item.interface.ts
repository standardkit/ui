import { SubNavigationItemInterface } from './sub-navigation-item.interface';

export interface NavigationItemInterface {
  icon: string;
  name: string;
  route: string;
  subNavigationItems?: SubNavigationItemInterface[];
}
