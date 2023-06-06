/* mui5 */
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import { useSetRecoilState } from "recoil";
import { DateOfUseAtom } from "recoil/atoms";

/**
 * ## フルキーボタングループ
 * * 操作ボタン候補群01
 * @author lafleurblanche
 */
export const FullKey01 = (): JSX.Element => {
  const setDateOfUse = useSetRecoilState(DateOfUseAtom);

  /**
   * 乗車日を本日に設定します。
   */
  const handleBtn001Click = () => {
    setDateOfUse("本日")
  }

  /**
   * 乗車日を明日に設定します。
   */
  const handleBtn002Click = () => {
    setDateOfUse("明日")
  }

  /**
   * 乗車日を明後日に設定します。
   */
  const handleBtn003Click = () => {
    setDateOfUse("明後日")
  }

  /**
   * 乗車日を1カ月後に設定します。
   */
  const handleBtn004Click = () => {
    setDateOfUse("1ヵ月後")
  }

  /**
   * 乗車日を日付未指定に設定します。
   */
  const handleBtn005Click = () => {
    setDateOfUse("日付未指定")
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
          本日
        </Button>
        <Button
          sx={{
            height: '100px',
            width: '100px'
          }}
          onClick={handleBtn002Click}
        >
          明日
        </Button>
        <Button
          sx={{
            height: '100px',
            width: '100px'
          }}
          onClick={handleBtn003Click}
        >
          明後日
        </Button>
        <Button
          sx={{
            height: '100px',
            width: '100px'
          }}
          onClick={handleBtn004Click}
        >
          1ヵ月後
        </Button>
        <Button
          sx={{
            height: '100px',
            width: '100px'
          }}
          onClick={handleBtn005Click}
        >
          日付<br />未指定
        </Button>
    </ButtonGroup>
   </Box>
  )
}
