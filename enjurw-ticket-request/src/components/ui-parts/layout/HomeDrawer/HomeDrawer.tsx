/* mui5 */
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";

/* mui5(icons) */
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

/* recoil */
import { useRecoilState } from "recoil";
import { drawerOpenAtom } from "recoil/atoms/DrawerOpenAtom";

/* ui-elements */
import { Drawer } from "components/ui-elements/Drawer/Drawer";
import { MainMenuListItems } from "../MainMenuListItems/MainMenuListItems";

/* ui-parts */


/**
 * HomeDrawer
 */
export default function HomeDrawer(): JSX.Element {
  const [open, setOpen] = useRecoilState(drawerOpenAtom);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return(
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        <MainMenuListItems />
      </List>
    </Drawer>
  )
};
