/* recoil */
import { useRecoilValue } from "recoil"

/* features(RouteSelect) */
import {
  EnjuRWRailwaySelect} from "features/RouteSelect/RailwaySelect"
import {
  ViaRouteSelectEnjuRW06,
  ViaRouteSelectEnjuRW07,
  ViaRouteSelectEnjuRW08,
  ViaRouteSelectEnjuRW09,
  ViaRouteSelectEnjuRW10,
  ViaRouteSelectEnjuRW11,
  ViaRouteSelectEnjuRW12,
  ViaRouteSelectEnjuRW13,
  ViaRouteSelectEnjuRW14,
  ViaRouteSelectEnjuRWCmn
} from "features/RouteSelect/ViaRouteSelect"

/* recoil(atoms) */
import { RouteNameAtom } from "recoil/atoms"

/**
 * ## 路線選択ボタングループ
 * * えんじゅ交通
 */
export const RouteSelectTest02 = () => {

  interface pageValue {
    [key: number]: () => JSX.Element
  }

  const selectRouteMap = new Map<string, number>(
    [
      ["", -1],
      ["苆谷線", 0],
      ["茄谷線", 1],
      ["笥谷線", 2],
      ["筏谷線", 3],
      ["筮谷線", 4],
      ["筁谷線", 5],
      ["筥谷線", 6],
      ["笒谷線", 7],
      ["箬谷線", 8],
      ["苕谷線", 9],
      ["扆谷線", 10],
      ["珩谷線", 11],
      ["玿谷線", 12],
      ["珮谷線", 13],
      ["荍谷線", 14],
      ["槐谷線", 15],
      ["拯川線", 16],
      ["卯塚線", 17],
      ["瑞堂線", 18],
      ["苆谷", 19],
      ["茄谷", 20],
      ["笥谷", 21],
      ["筏谷", 22],
      ["筮谷", 23],
      ["筁谷", 24],
      ["筥谷", 25],
      ["笒谷", 26],
      ["箬谷", 27],
      ["苕谷", 28],
      ["扆谷", 29],
      ["珩谷", 30],
      ["玿谷", 31],
      ["珮谷", 32],
      ["荍谷", 33],
      ["槐谷", 34],
      ["拯川", 35],
      ["卯塚", 36],
      ["瑞堂", 37],
      ["経苆", 38],
      ["経茄", 39],
      ["経笥", 40],
      ["経筏", 41],
      ["経筮", 42],
      ["経筁", 43],
      ["経筥", 44],
      ["経笒", 45],
      ["経箬", 46],
      ["経苕", 47],
      ["経扆", 48],
      ["経珩", 49],
      ["経玿", 50],
      ["経珮", 51],
      ["経荍", 52],
      ["経槐", 53],
      ["経拯", 54],
      ["経卯", 55],
      ["経瑞", 56],
    ]
  );

  const pageComponent: pageValue = {
    19: ViaRouteSelectEnjuRWCmn,
    20: ViaRouteSelectEnjuRWCmn,
    21: ViaRouteSelectEnjuRWCmn,
    22: ViaRouteSelectEnjuRWCmn,
    23: ViaRouteSelectEnjuRWCmn,
    24: ViaRouteSelectEnjuRW06,
    25: ViaRouteSelectEnjuRW07,
    26: ViaRouteSelectEnjuRW08,
    27: ViaRouteSelectEnjuRW09,
    28: ViaRouteSelectEnjuRW10,
    29: ViaRouteSelectEnjuRW11,
    30: ViaRouteSelectEnjuRW12,
    31: ViaRouteSelectEnjuRW13,
    32: ViaRouteSelectEnjuRW14,
    33: ViaRouteSelectEnjuRWCmn,
    34: ViaRouteSelectEnjuRWCmn,
  };

  const isRouteSelected = useRecoilValue(RouteNameAtom);

  const RouteSelectBtnGrp = () => {
    let value = selectRouteMap.get(isRouteSelected)
    console.info(value)
    if (value === undefined) {
      value = -1
    }
    if(value === -1) {
      return <EnjuRWRailwaySelect />
    } else {
      const Page = pageComponent[value];
      return <Page />
    }
  }

  return(
    <RouteSelectBtnGrp />
  )
}
