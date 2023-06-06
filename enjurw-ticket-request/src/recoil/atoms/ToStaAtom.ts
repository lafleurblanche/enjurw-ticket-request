import { atom } from "recoil";
import AtomKeys from "recoil/atoms/AtomKeys";

export const ToStaAtom = atom<string>({
  key: AtomKeys.TO_STA,
  default: "降車駅"
});
