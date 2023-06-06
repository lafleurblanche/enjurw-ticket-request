/* mui5 */
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';

/* ui-elements */
import { drawerWidth } from 'components/ui-elements/Drawer/DrawerWidth';
import { AppBarProps } from 'components/ui-elements/AppBar/AppBarProp';

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
