/* mui5 */
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import Typography from "@mui/material/Typography"

/* features(RouteSelect) */
import { RequestInquiryList } from "../RequestInquiryList"

/* recoil */
import {
  useRecoilValue,
  useSetRecoilState
} from "recoil"
import {
  FromStaAtom,
  ToStaAtom,
  ViaRouteAtom,
  adultMemberAtom,
  halfMemberAtom,
  childMemberAtom,
  DateOfUseAtom,
  TicketTypeAtom,
  FromStaCodeAtom,
  ToStaCodeAtom,
  RequestNumberAtom
} from "recoil/atoms"
import {
  ErrorDetailAtom,
  sendResultDialogAtom,
  sendResultErrorDialogAtom
} from "recoil/atoms/dialog"

/* api */
import FetcherPostCerinthe from "api/FetcherPost"

/* common */
import { ApiUrlCerinthe } from "common/constant/ApiUrlCerinthe"
import { HttpStatus } from "common/constant/HttpStatus"

/* ui-parts */
import SendResultDialog from "components/ui-parts/layout/Dialog/SendResultDialog"
import SendResultErrorDialog from "components/ui-parts/layout/Dialog/SendResultErrorDialog"

/**
 * ## 発信/照会候補ボタングループ
 * * 支線連絡系統
 */
export const RequestInquirySelect01 = () => {

  const fromSta = useRecoilValue(FromStaAtom)
  const toSta = useRecoilValue(ToStaAtom);
  const viaRoute = useRecoilValue(ViaRouteAtom);
  const adultMember = useRecoilValue(adultMemberAtom);
  const halfMember = useRecoilValue(halfMemberAtom);
  const childMember = useRecoilValue(childMemberAtom);
  const dateOfUse = useRecoilValue(DateOfUseAtom);
  const ticketType = useRecoilValue(TicketTypeAtom);
  const fromStaCode = useRecoilValue(FromStaCodeAtom);
  const toStaCode = useRecoilValue(ToStaCodeAtom);
  const setSendResultDialogOpen = useSetRecoilState(sendResultDialogAtom);
  const setSendResultErrorDialogOpen = useSetRecoilState(sendResultErrorDialogAtom);
  const setErrorResult = useSetRecoilState(ErrorDetailAtom);
  const setRequestNumber = useSetRecoilState(RequestNumberAtom);

  let requestData = {
    fromSta: fromSta,
    toSta: toSta,
    viaRouteConfig: viaRoute,
    adultMember: adultMember,
    halfMember: halfMember,
    childMember: childMember,
    dateOfUse: dateOfUse,
    ticketType: ticketType,
    fromStaCode: fromStaCode,
    toStaCode: toStaCode,
    viaRouteCode: "経由路線コード",
    discountCode: "割引種別",
    postPayCode: "後払種別",
    specialNote: "特記事項",
    sectorKbn: "ARGW",
  }

  const handleOnClick = (menuCode: String) => {
    if (requestData.fromSta === requestData.toSta) {
      setErrorResult("乗車駅と降車駅が同一です。");
      setSendResultErrorDialogOpen(true);
      console.error("ERROR");
      return
    }
    if (menuCode === "MENU01") {
      FetcherPostCerinthe(ApiUrlCerinthe.CerintheRegistAPI, requestData).then((result) => {
        console.log(result);
        if (result.status === HttpStatus.HTTP_STATUS_OK ) {
          setSendResultDialogOpen(true);
          setRequestNumber(result.reqNo);
        } else {
          setErrorResult(result.result);
          setSendResultErrorDialogOpen(true);
          console.error("ERROR");
        }
      })
    } else {
      console.info("aaa")
    }
  }

  return(
    <>
    <SendResultDialog />
    <SendResultErrorDialog />
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 0.05,
        },
      }}
    >
      <ButtonGroup
        variant="outlined"
        aria-label="outlined large button group"
        size="large"
      >
        {RequestInquiryList.map(p => (
          <Button
            key={p.id}
            sx={{
              height: '100px',
              width: '100px'
            }}
            onClick={() => handleOnClick(p.menuCode)}
          >
            <Typography
              color="inherit"
              noWrap
              sx={{
                flexGrow: 1,
                fontSize: 18
              }}
            >
              {p.menuName}
            </Typography>
          </Button>
        ))}
      </ButtonGroup>
    </Box>
    </>
  )
}
