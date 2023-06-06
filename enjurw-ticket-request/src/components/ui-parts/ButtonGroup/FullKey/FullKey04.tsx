/* mui5 */
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import { useSetRecoilState } from "recoil"
import { TicketTypeAtom } from "recoil/atoms"

/**
 * ## フルキーボタングループ
 * * 操作ボタン候補群04
 * @author lafleurblanche
 */
export const FullKey04 = (): JSX.Element => {

  const setTicketType = useSetRecoilState(TicketTypeAtom);

  /**
   * 券面種別を片道乗車券に設定します。
   */
  const handleBtn001Click = () => {
    setTicketType("片道乗車券")
  }

  /**
   * 券面種別を往復乗車券に設定します。
   */
  const handleBtn002Click = () => {
    setTicketType("往復乗車券")
  }

  return(
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
        <Button
          sx={{
            height: '100px',
            width: '100px'
          }}
          onClick={handleBtn001Click}
        >
          片道
        </Button>
        <Button
          sx={{
            height: '100px',
            width: '100px'
          }}
          onClick={handleBtn002Click}
        >
          往復
        </Button>
        <Button
          sx={{
            height: '100px',
            width: '100px'
          }}
        >
          連続1
        </Button>
        <Button
          sx={{
            height: '100px',
            width: '100px'
          }}
        >
          連続2
        </Button>
        <Button
          sx={{
            height: '100px',
            width: '100px'
          }}
        >
          分割
        </Button>
    </ButtonGroup>
   </Box>
  )
}
