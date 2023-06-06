/* mui5 */
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

/* mui5(styles) */
import { ThemeProvider } from '@mui/material/styles';

/* common/hooks */
import { useDrawerOpen } from 'common/hooks/useDrawerOpen';

/* ui-elements */
import {
  AppBar,
  mdTheme
} from 'components/ui-elements';

/* ui-parts(layout) */
import {
  HomeAppBar,
  HomeDrawer
} from 'components/ui-parts/layout';

/* features(TicketRequest) */
import TicketRequest from 'features/TicketRequest/TicketRequest';

/**
 * ## 乗車券要求画面Page
 * @author laflueblanche
 */
export function TicketRequestPage(): JSX.Element {
  const {open} = useDrawerOpen();

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ maxWidth: 1600, display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} sx={{ bgcolor: '#3949ab'}}>
          <HomeAppBar />
        </AppBar>
        <HomeDrawer />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <TicketRequest />
        </Box>
      </Box>
    </ThemeProvider>
  );
};
