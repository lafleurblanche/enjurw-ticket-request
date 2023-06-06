/* recoil */
import { atom } from "recoil";
import AtomKeys from "./AtomKeys";

export const adultMemberAtom = atom<string>({
  key: AtomKeys.ADULT_MEMBER,
  default: "0"
});
