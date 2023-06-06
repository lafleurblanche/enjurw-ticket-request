/* recoil */
import { atom } from "recoil";
import AtomKeys from "./AtomKeys";

export const childMemberAtom = atom<string>({
  key: AtomKeys.CHILD_MEMBER,
  default: "0"
});
