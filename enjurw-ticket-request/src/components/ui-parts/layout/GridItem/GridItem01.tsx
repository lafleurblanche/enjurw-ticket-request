/* mui */
import Grid from "@mui/material/Grid";

/* ui-elements */
import { Item2 } from "components/ui-elements";

/**
 * GridItemコンポーネント
 */
export const GridItem01 = () => {
  return(
    <Grid item xs={2}>
      <Item2>
        <>乗車駅</>
      </Item2>
      <Item2>
        <>降車駅</>
      </Item2>
      <Item2>
        <>経路設定</>
      </Item2>
      <Item2>
        <>大人乗車人員</>
      </Item2>
      <Item2>
        <>半額乗車人員</>
      </Item2>
      <Item2>
        <>小児乗車人員</>
      </Item2>
      <Item2>
        <>乗車日</>
      </Item2>
      <Item2>
        <>券面種別</>
      </Item2>
      <Item2>
        <>乗車駅コード</>
      </Item2>
      <Item2>
        <>降車駅コード</>
      </Item2>
      <Item2>
        <>経由路線コード</>
      </Item2>
    </Grid>
  )
};
