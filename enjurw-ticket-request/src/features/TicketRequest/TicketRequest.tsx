/* react */
import * as React from 'react';

/* mui5 */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

/* ui-parts(ButtonGroup) */
import { Discount01 } from 'components/ui-parts/ButtonGroup/Discount/Discount01';
import { FullKey01 } from 'components/ui-parts/ButtonGroup/FullKey/FullKey01';
import { FullKey02 } from 'components/ui-parts/ButtonGroup/FullKey/FullKey02';
import { FullKey03 } from 'components/ui-parts/ButtonGroup/FullKey/FullKey03';
import { FullKey04 } from 'components/ui-parts/ButtonGroup/FullKey/FullKey04';
import { FullKey05 } from 'components/ui-parts/ButtonGroup/FullKey/Fullkey05';

/* ui-parts(layout) */
import {
  GridItem01,
  GridItem02,
  GridItem03
} from 'components/ui-parts/layout';

/* ui-parts(RouteSelectTest) */
import {
  RouteSelectTest01
} from 'components/ui-parts/RouteSelectTest/RouteSelectTest01';

/* features(RequestInquiry) */
import {
  RequestInquirySelect01
} from 'features/RequestInquiry/RequestInquirySelect/RequestInquirySelect01';

/* feature(OneTouch) */
import { OneTouchMenuSelect01 } from 'features/OneTouch/OneTouchMenuSelect';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yPropsContent(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function a11yPropsKey(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TicketRequest(): JSX.Element {
  const [value, setValue] = React.useState(0);
  const [valueContent, setValueContent] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleContentChange = (event: React.SyntheticEvent, newValue: number) => {
    setValueContent(newValue);
  };


  return (
    <Box sx={{ maxWidth:'1350px', width: '120%' }}>
      <Grid container spacing={2}>
      <Grid item xs={0.1} />
        <Grid item xs={4}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={valueContent}
              onChange={handleContentChange}
              aria-label="basic tabs example"
              textColor='secondary'
              indicatorColor='secondary'
            >
              <Tab label="要求内容" {...a11yPropsContent(0)} />
              <Tab label="詳細項目" {...a11yPropsContent(1)} />
            </Tabs>
          </Box>
          <TabPanel value={valueContent} index={0}>
            <Box sx={{ width: '250%' }}>
              <Grid container spacing={0.5}>
                <GridItem01 />
                <GridItem02 />
                <GridItem03 />
              </Grid>
            </Box>
          </TabPanel>
        </Grid>
        <Grid item xs={0.1} />
        <Grid item xs={6}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="フルキー" {...a11yPropsKey(0)} />
              <Tab label="ワンタッチ" {...a11yPropsKey(1)} />
              <Tab label="経路設定" {...a11yPropsKey(2)} />
              <Tab label="割引種別" {...a11yPropsKey(3)} />
              <Tab label="後払種別" {...a11yPropsKey(4)} />
              <Tab label="発信/照会" {...a11yPropsKey(5)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <FullKey01 />
            <FullKey02 />
            <FullKey03 />
            <FullKey04 />
            <FullKey05 />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <OneTouchMenuSelect01 />
          </TabPanel>
          <TabPanel value={value} index={2}>
           <RouteSelectTest01 />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Discount01 />
          </TabPanel>
          <TabPanel value={value} index={4}>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <RequestInquirySelect01 />
          </TabPanel>
        </Grid>
      </Grid>
    </Box>
  );
}
