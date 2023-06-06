/* recoil */
import { atom } from "recoil";
import AtomKeys from "recoil/atoms/AtomKeys";

export const sendResultDialogAtom = atom<boolean>({
  key: AtomKeys.SEND_RESULT_DIALOG,
  default: false
});
