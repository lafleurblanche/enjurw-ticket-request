/* recoil */
import { atom } from "recoil";
import AtomKeys from "recoil/atoms/AtomKeys";

export const RequestNumberAtom = atom<string>({
  key: AtomKeys.REQUEST_NUMBER,
  default: 'SENDXXXXXXXX'
});
