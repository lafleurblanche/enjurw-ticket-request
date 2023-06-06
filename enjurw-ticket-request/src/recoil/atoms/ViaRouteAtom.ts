import { atom } from "recoil";
import AtomKeys from "recoil/atoms/AtomKeys";

export const ViaRouteAtom = atom<string>({
  key: AtomKeys.VIA_ROUTE,
  default: "経路自動設定"
});
