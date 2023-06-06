import { atom } from "recoil";
import AtomKeys from "recoil/atoms/AtomKeys";

export const FromStaAtom = atom<string>({
  key: AtomKeys.FROM_STA,
  default: "乗車駅"
});
