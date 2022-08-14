import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import TabPanelCard from './tabpanel.js';
import TabPanelTwo from './tabpaneltwo.js';
import TabPanelThree from './tabpanelthree.js';
import TabPanelFour from './tabpanelfour.js';
import TabPanelFive from './tabpanelfive.js';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import styles from './styles.module.css';

const theme = createTheme({
  palette: {
    primary: {
      // Eastern Blue color have set. you change the color as per your choice.
      main: '#00809D',
    },
  },
});

function TabPanel(props) {
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function FullWidthGrid() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.ContentContainer}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card className={styles.cardContainer}>
            <CardHeader
              className={styles.cardHeader}
              action={
                <IconButton aria-label="settings">
                  <MoreHorizIcon className={styles.notificationIcon} />
                </IconButton>
              }
              title={
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className={styles.cardTitle}
                >
                  Roger Federer
                  <br />
                  <span className={styles.seasonYear}>
                    Singles Rank 97 · Switzerland
                  </span>
                </Typography>
              }
            />
            <Box
              sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}
            >
              <ThemeProvider theme={theme}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  color="secondary"
                  variant="scrollable"
                  aria-label="visible arrows tabs example"
                  sx={{
                    [`& .${tabsClasses.scrollButtons}`]: {
                      '&.Mui-disabled': { opacity: 0.3 },
                    },
                  }}
                >
                  <Tab
                    label="QATAR EXXONMOBIL OPEN"
                    {...a11yProps(0)}
                    className={styles.tabContainer}
                  />
                  <Tab
                    label="GONET GENEEVA OPEN"
                    {...a11yProps(1)}
                    className={styles.tabContainer}
                  />
                  <Tab
                    label="ROLAND GARROS"
                    {...a11yProps(2)}
                    className={styles.tabContainer}
                  />
                  <Tab
                    label="NOVENTI OPEN "
                    {...a11yProps(3)}
                    className={styles.tabContainer}
                  />
                  <Tab
                    label="WIMBLEDON"
                    {...a11yProps(4)}
                    className={styles.tabContainer}
                  />
                </Tabs>
              </ThemeProvider>
            </Box>
            <TabPanel
              value={value}
              index={0}
              className={styles.tabPanelContainer}
            >
              {/* <TabPanelCard /> */}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {/* <TabPanelFive /> */}
            </TabPanel>
            <TabPanel
              value={value}
              index={2}
              className={styles.tabPanelContainer}
            >
              {/* <TabPanelTwo /> */}
            </TabPanel>
            <TabPanel
              value={value}
              index={3}
              className={styles.tabPanelContainer}
            >
              {/* <TabPanelThree /> */}
            </TabPanel>
            <TabPanel
              value={value}
              index={4}
              className={styles.tabPanelContainer}
            >
              {/* <TabPanelFour /> */}
            </TabPanel>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}></Grid>
      </Grid>
    </div>
  );
}
