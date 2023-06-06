/* recoil */
import { atom } from "recoil";
import AtomKeys from "recoil/atoms/AtomKeys";

export const RouteNameAtom = atom<string>({
  key: AtomKeys.ROUTE_NAME,
  default: ''
});
