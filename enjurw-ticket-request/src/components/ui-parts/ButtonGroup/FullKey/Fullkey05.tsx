/* mui5 */
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"

/* recoil */
import { useSetRecoilState } from "recoil";

/* recoil(atoms) */
import {
  adultMemberAtom,
  childMemberAtom,
  halfMemberAtom
} from "recoil/atoms";

/**
 * ## フルキーボタングループ
 * * 操作ボタン候補群03
 * @author lafleurblanche
 */
export const FullKey05 = (): JSX.Element => {

  const setAdultMember = useSetRecoilState(adultMemberAtom);
  const setChildMember = useSetRecoilState(childMemberAtom);
  const setHalfMember = useSetRecoilState(halfMemberAtom);

  /**
   * 大人乗車人員を0名に設定します。
   */
  const handleBtn001Click = () => {
    setAdultMember("0")
  }

  /**
   * 半額乗車人員を1名に設定します。
   */
  const handleBtn002Click = () => {
    setHalfMember("0")
  }

  /**
   * 小児乗車人員を0名に設定します。
   */
  const handleBtn003Click = () => {
    setChildMember("0")
  }

  /**
   * 全乗車人員を0名に設定します。
   */
  const handleBtn004Click = () => {
    setAdultMember("0")
    setChildMember("0")
    setHalfMember("0")
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
          大人<br />クリア
        </Button>
        <Button
          sx={{
            height: '100px',
            width: '100px'
          }}
          onClick={handleBtn002Click}
        >
          半額<br />クリア
        </Button>
        <Button
          sx={{
            height: '100px',
            width: '100px'
          }}
          onClick={handleBtn003Click}
        >
          小児<br />クリア
        </Button>
        <Button
          sx={{
            height: '100px',
            width: '100px'
          }}
          onClick={handleBtn004Click}
        >
          人員<br />クリア
        </Button>
        <Button
          sx={{
            height: '100px',
            width: '100px'
          }}
        >
        </Button>
      </ButtonGroup>
    </Box>
  )
}
