/* recoil */
import { atom } from "recoil";
import AtomKeys from "./AtomKeys";

export const halfMemberAtom = atom<string>({
  key: AtomKeys.HALF_MEMBER,
  default: "0"
});
