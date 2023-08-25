export interface ListItemInterface {
  icon: string;
  name: string;
  actionIcon?: string;
  action: () => void;
}
