/* mui5 */
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

/* mui5(icons) */
import MenuIcon from '@mui/icons-material/Menu';

/* recoil */
import { useRecoilState } from "recoil";
import { drawerOpenAtom } from "recoil/atoms/DrawerOpenAtom";

/**
 * HomeAppBar
 */
export default function HomeAppBar(): JSX.Element {
  const [open, setOpen] = useRecoilState(drawerOpenAtom);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <>
      <Toolbar
        sx={{
          pr: '24px', // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          ENJURW
        </Typography>
      </Toolbar>
    </>
  )
};
