/* mui5 */
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import Typography from "@mui/material/Typography"

/* recoil */
import { useSetRecoilState } from "recoil"

/* recoil(atom) */
import {
  RouteNameAtom
} from "recoil/atoms"

/* features(RouteSelect) */
import {
  ViaRouteListEnjuRWCmn01,
  ViaRouteListEnjuRWCmn02
} from "features/RouteSelect/ViaRouteList"

/**
 * ## 経由路線選択候補ボタングループ
 * * えんじゅ交通経路設定共通
 */
export const ViaRouteSelectEnjuRWCmn = () => {

  const setIsRouteSelected = useSetRecoilState(RouteNameAtom)

  const handleOnClick = (selectdRoute: string) => {
    setIsRouteSelected(selectdRoute)
  }

  return(
    <>
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
        {
          ViaRouteListEnjuRWCmn01.map(p => (
            <Button
              key={p.id}
              sx={{
                height: '100px',
                width: '100px'
              }}
              onClick={() => handleOnClick(p.selectedRoute)}
            >
              <Typography
                color="inherit"
                noWrap
                sx={{
                  flexGrow: 1,
                  fontSize: 15
                }}
              >
                {p.routeName}
              </Typography>
            </Button>
          ))
        }
      </ButtonGroup>
   </Box>
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
        {
          ViaRouteListEnjuRWCmn02.map(p => (
            <Button
              key={p.id}
              sx={{
                height: '100px',
                width: '100px'
              }}
              onClick={() => handleOnClick(p.selectedRoute)}
            >
              <Typography
                color="inherit"
                noWrap
                sx={{
                  flexGrow: 1,
                  fontSize: 15
                }}
              >
                {p.routeName}
              </Typography>
            </Button>
          ))
        }
      </ButtonGroup>
   </Box>
   </>
  )
}
