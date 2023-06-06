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
 * * 操作ボタン候補群02
 * @author lafleurblanche
 */
export const FullKey02 = (): JSX.Element => {

  const setAdultMember = useSetRecoilState(adultMemberAtom);
  const setChildMember = useSetRecoilState(childMemberAtom);
  const setHalfMember = useSetRecoilState(halfMemberAtom);

  /**
   * 大人乗車人員を1名に設定します。
   */
  const handleBtn001Click = () => {
    setAdultMember("1")
  }

  /**
   * 大人乗車人員を2名に設定します。
   */
  const handleBtn002Click = () => {
    setAdultMember("2")
  }

  /**
   * 半額乗車人員を1名に設定します。
   */
  const handleBtn003Click = () => {
    setHalfMember("1")
  }

  /**
   * 半額乗車人員を2名に設定します。
   */
  const handleBtn004Click = () => {
    setHalfMember("2")
  }

  /**
   * 小児乗車人員を1名に設定します。
   */
  const handleBtn005Click = () => {
    setChildMember("1")
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
          大人1
        </Button>
        <Button
          sx={{
            height: '100px',
            width: '100px'
          }}
          onClick={handleBtn002Click}
        >
          大人2
        </Button>
        <Button
          sx={{
            height: '100px',
            width: '100px'
          }}
          onClick={handleBtn003Click}
        >
          半額1
        </Button>
        <Button
          sx={{
            height: '100px',
            width: '100px'
          }}
          onClick={handleBtn004Click}
        >
          半額2
        </Button>
        <Button
          sx={{
            height: '100px',
            width: '100px'
          }}
          onClick={handleBtn005Click}
        >
          小児1
        </Button>
      </ButtonGroup>
    </Box>
  )
}
