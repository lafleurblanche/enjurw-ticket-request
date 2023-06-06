/* mui */
import Grid from "@mui/material/Grid";

/* recoil */
import { useRecoilValue } from "recoil";

/* ui-elements */
import { Item } from "components/ui-elements";

/* recoil(atoms) */
import {
  adultMemberAtom,
  childMemberAtom,
  DateOfUseAtom,
  FromStaAtom,
  FromStaCodeAtom,
  halfMemberAtom,
  TicketTypeAtom,
  ToStaAtom,
  ToStaCodeAtom,
  ViaRouteAtom,
  ViaRouteCodeAtom
} from "recoil/atoms";


/**
 * GridItemコンポーネント
 */
export const GridItem03 = () => {

  const fromSta = useRecoilValue(FromStaAtom)
  const toSta = useRecoilValue(ToStaAtom);
  const viaRoute = useRecoilValue(ViaRouteAtom);
  const adultMember = useRecoilValue(adultMemberAtom);
  const halfMember = useRecoilValue(halfMemberAtom);
  const childMember = useRecoilValue(childMemberAtom);
  const dateOfUse = useRecoilValue(DateOfUseAtom);
  const ticketType = useRecoilValue(TicketTypeAtom);
  const fromStaCode = useRecoilValue(FromStaCodeAtom)
  const toStaCode = useRecoilValue(ToStaCodeAtom)
  const viaRouteCode = useRecoilValue(ViaRouteCodeAtom)

  return(
    <Grid item xs={2.5}>
      <Item>
        <>{fromSta}</>
      </Item>
      <Item>
        <>{toSta}</>
      </Item>
      <Item>
        <>{viaRoute}</>
      </Item>
      <Item>
        <>{adultMember}名</>
      </Item>
      <Item>
        <>{halfMember}名</>
      </Item>
      <Item>
        <>{childMember}名</>
      </Item>
      <Item>
        <>{dateOfUse}</>
      </Item>
      <Item>
        <>{ticketType}</>
      </Item>
      <Item>
        <>{fromStaCode}</>
      </Item>
      <Item>
        <>{toStaCode}</>
      </Item>
      <Item>
        <>{viaRouteCode}</>
      </Item>
    </Grid>
  )
};
