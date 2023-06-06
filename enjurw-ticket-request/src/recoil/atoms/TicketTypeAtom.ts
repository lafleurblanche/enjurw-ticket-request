/* recoil */
import { atom } from "recoil";
import AtomKeys from "recoil/atoms/AtomKeys";

export const TicketTypeAtom = atom<string>({
  key: AtomKeys.TICKET_TYPE,
  default: '片道乗車券'
});
