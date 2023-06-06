import { atom } from "recoil";
import AtomKeys from "recoil/atoms/AtomKeys";

export const ToStaCodeAtom = atom<string>({
  key: AtomKeys.TO_STA_CODE,
  default: "降車駅コード"
});
