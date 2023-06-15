/* recoil */
import { useRecoilValue } from "recoil"

/* recoil(atoms) */
import { RouteNameAtom } from "recoil/atoms"

/* features(RouteSelect) */
import { EnjuRWRailwaySelect } from "features/RouteSelect/RailwaySelect"
import { RouteSelectTest02 } from "./RouteSelectTest02"
import {
  ToStaSelectEnjuRW01,
  ToStaSelectEnjuRW02,
  ToStaSelectEnjuRW03,
  ToStaSelectEnjuRW04,
  ToStaSelectEnjuRW05,
  ToStaSelectEnjuRW06,
  ToStaSelectEnjuRW07,
  ToStaSelectEnjuRW08,
  ToStaSelectEnjuRW09,
  ToStaSelectEnjuRW10,
  ToStaSelectEnjuRW11
} from "features/RouteSelect/ToStaSelect"
import {
  FromStaSelectEnjuRW01,
  FromStaSelectEnjuRW02,
  FromStaSelectEnjuRW03,
  FromStaSelectEnjuRW04,
  FromStaSelectEnjuRW05,
  FromStaSelectEnjuRW06,
  FromStaSelectEnjuRW07,
  FromStaSelectEnjuRW08,
  FromStaSelectEnjuRW09,
  FromStaSelectEnjuRW10,
  FromStaSelectEnjuRW11
} from "features/RouteSelect/FromStaSelect"


/**
 * ## 路線選択ボタングループ
 * * えんじゅ交通
 */
export const RouteSelectTest01 = () => {

  interface pageValue {
    [key: number]: () => JSX.Element
  }

  const isRouteSelected = useRecoilValue(RouteNameAtom);
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
    0: FromStaSelectEnjuRW01,
    1: FromStaSelectEnjuRW02,
    2: FromStaSelectEnjuRW03,
    3: FromStaSelectEnjuRW04,
    4: FromStaSelectEnjuRW05,
    5: FromStaSelectEnjuRW06,
    6: FromStaSelectEnjuRW07,
    7: FromStaSelectEnjuRW08,
    8: FromStaSelectEnjuRW09,
    9: FromStaSelectEnjuRW10,
    10: FromStaSelectEnjuRW11,
    19: RouteSelectTest02,
    20: RouteSelectTest02,
    21: RouteSelectTest02,
    22: RouteSelectTest02,
    23: RouteSelectTest02,
    24: RouteSelectTest02,
    25: RouteSelectTest02,
    26: RouteSelectTest02,
    27: RouteSelectTest02,
    28: RouteSelectTest02,
    29: RouteSelectTest02,
    38: ToStaSelectEnjuRW01,
    39: ToStaSelectEnjuRW02,
    40: ToStaSelectEnjuRW03,
    41: ToStaSelectEnjuRW04,
    42: ToStaSelectEnjuRW05,
    43: ToStaSelectEnjuRW06,
    44: ToStaSelectEnjuRW07,
    45: ToStaSelectEnjuRW08,
    46: ToStaSelectEnjuRW09,
    47: ToStaSelectEnjuRW10,
    48: ToStaSelectEnjuRW11,
  };


  const RouteSelectBtnGrp = () => {
    let value = selectRouteMap.get(isRouteSelected)
    console.info(value)
    if (value === undefined) {
      value = 0
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
