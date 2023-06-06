/* mui5 */
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"

/* recoil */
import { useSetRecoilState } from "recoil";

/* recoil(atoms) */
import {
  adultMemberAtom,
  childMemberAtom
} from "recoil/atoms";

/**
 * ## フルキーボタングループ
 * * 操作ボタン候補群03
 * @author lafleurblanche
 */
export const FullKey03 = (): JSX.Element => {

  const setAdultMember = useSetRecoilState(adultMemberAtom);
  const setChildMember = useSetRecoilState(childMemberAtom);

  /**
   * 小児乗車人員を2名に設定します。
   */
  const handleBtn001Click = () => {
    setChildMember("2")
  }

  /**
   * 大人乗車人員を1名に設定します。  
   * 小児乗車人員を1名に設定します。
   */
  const handleBtn002Click = () => {
    setAdultMember("1")
    setChildMember("1")
  }

  /**
   * 大人乗車人員を1名に設定します。  
   * 小児乗車人員を2名に設定します。
   */
  const handleBtn003Click = () => {
    setAdultMember("1")
    setChildMember("2")
  }

  /**
   * 大人乗車人員を2名に設定します。  
   * 小児乗車人員を1名に設定します。
   */
  const handleBtn004Click = () => {
    setAdultMember("2")
    setChildMember("1")
  }

  /**
   * 大人乗車人員を2名に設定します。  
   * 小児乗車人員を2名に設定します。
   */
  const handleBtn005Click = () => {
    setAdultMember("2")
    setChildMember("2")
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
          小児2
        </Button>
        <Button
          sx={{
            height: '100px',
            width: '100px'
          }}
          onClick={handleBtn002Click}
        >
          大人1<br />小児1
        </Button>
        <Button
          sx={{
            height: '100px',
            width: '100px'
          }}
          onClick={handleBtn003Click}
        >
          大人1<br />小児2
        </Button>
        <Button
          sx={{
            height: '100px',
            width: '100px'
          }}
          onClick={handleBtn004Click}
        >
          大人2<br />小児1
        </Button>
        <Button
          sx={{
            height: '100px',
            width: '100px'
          }}
          onClick={handleBtn005Click}
        >
          大人2<br />小児2
        </Button>
      </ButtonGroup>
    </Box>
  )
}
