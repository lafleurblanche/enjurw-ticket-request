/* recoil */
import { atom } from "recoil";
import AtomKeys from "./AtomKeys";

export const DateOfUseAtom = atom<string>({
  key: AtomKeys.DATE_OF_USE,
  default: "乗車日"
});
