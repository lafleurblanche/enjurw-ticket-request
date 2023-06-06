/* recoil */
import { atom } from "recoil";
import AtomKeys from "recoil/atoms/AtomKeys";

export const ErrorDetailAtom = atom<string>({
  key: AtomKeys.ERROR_DETAIL,
  default: ""
});
