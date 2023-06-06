/* react */
import * as React from 'react';

/* mui5 */
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

/* mui5(icons) */
import {
  Home,
  Payment
} from '@mui/icons-material';

/* ui-elements */
import { ListItemsLink } from 'components/ui-elements/Link/ListItemsLink';

export const MainMenuListItems = (): JSX.Element => {

  return(
    <React.Fragment>
      <List component="div" disablePadding>
        <ListItemsLink href="/enjurw/request">
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="TOPPAGE" />
          </ListItemButton>
        </ListItemsLink>
        <ListItemsLink href="/enjurw/request/ticket">
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <Payment />
            </ListItemIcon>
            <ListItemText primary="乗車券要求" />
          </ListItemButton>
        </ListItemsLink>
      </List>
    </React.Fragment>
  );
};
