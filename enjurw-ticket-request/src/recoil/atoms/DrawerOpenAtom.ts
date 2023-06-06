/* recoil */
import { atom } from "recoil";
import AtomKeys from "recoil/atoms/AtomKeys";

export const drawerOpenAtom = atom<boolean>({
  key: AtomKeys.DRAWER_OPEN,
  default: true
});
