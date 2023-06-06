import { atom } from "recoil";
import AtomKeys from "recoil/atoms/AtomKeys";

export const FromStaCodeAtom = atom<string>({
  key: AtomKeys.FROM_STA_CODE,
  default: "乗車駅コード"
});
