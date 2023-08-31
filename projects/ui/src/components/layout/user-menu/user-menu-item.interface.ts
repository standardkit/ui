// TODO : Make generic action interface in core, use for table too.
//  This looks a lot like list-item interface, check with 'core' lib.
export interface UserMenuItemInterface {
  icon: string;
  name: string;
  action: () => void;
}
