/* recoil */
import { atom } from "recoil";
import AtomKeys from "recoil/atoms/AtomKeys";

export const sendResultErrorDialogAtom = atom<boolean>({
  key: AtomKeys.SEND_RESULT_ERROR_DIALOG,
  default: false
});
