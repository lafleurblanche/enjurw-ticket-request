import { atom } from "recoil";
import AtomKeys from "recoil/atoms/AtomKeys";

export const ViaRouteCodeAtom = atom<string>({
  key: AtomKeys.VIA_ROUTE_CODE,
  default: "経由路線コード"
});
