// TODO : Make generic action interface in root, use for table too.
export interface UserMenuItemInterface {
  icon: string;
  name: string;
  action: () => void;
}
