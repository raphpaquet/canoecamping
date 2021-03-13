import { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import '../screens/Canoe.scss'

function TabPanel(props) {
  const { children, value, index, ...other } = props;
// Or Create your Own theme:
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#FFF'
    }
  }
});
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: "center",
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor={"#f8c740"}
          textColor={"#f8c740"}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="2 jours" {...a11yProps(0)} />
          <Tab label="3 jours" {...a11yProps(1)} />
          <Tab label="4 jours" {...a11yProps(2)} />
          <Tab label="6 jours" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <h2 className="activity-summary">Aventure Canot-Camping 2 jours</h2>
        <div className="activity-container">
          <img className="activity-img" src="/images/map.png" />
          <div className="activity-text-container">
            <p className="activity-text">
              Durée : 2 jours
            </p>
            <p className="activity-text">
              Difficulté: débutant/intermédiaire
            </p>
            <p className="activity-text">
              Prix : À partir de 50$/jour
            </p>
            <p className="activity-text">
              Inclusions: Canot & Navette jusqu'au point de départ 
            </p>
              </div>
            <button className="button reserve">Réserver</button>
          </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h2 className="activity-summary">Aventure Canot-Camping 3 jours</h2>
        <div className="activity-container">
          <img className="activity-img" src="/images/map.png" />
          <div className="activity-text-container">
            <p className="activity-text">
              Durée : 3 jours
            </p>
            <p className="activity-text">
              Difficulté: débutant/intermédiaire
            </p>
            <p className="activity-text">
              Prix : À partir de 50$/jour
            </p>
            <p className="activity-text">
              Inclusions: Canot & Navette jusqu'au point de départ 
            </p>
          </div>
           <button className="button reserve">Réserver</button>
          </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h2 className="activity-summary">Aventure Canot-Camping 4 jours</h2>
        <div className="activity-container">
          <img className="activity-img" src="/images/map.png" style={{width:"50rem"}}/>
          <div className="activity-text-container">
            <p className="activity-text">
              Durée : 4 jours
            </p>
            <p className="activity-text">
              Difficulté: débutant/intermédiaire
            </p>
            <p className="activity-text">
              Prix : À partir de 50$/jour
            </p>
            <p className="activity-text">
              Inclusions: Canot & Navette jusqu'au point de départ 
            </p>
              </div>
            <button className="button reserve">Réserver</button>
          </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <h2 className="activity-summary">Aventure Canot-Camping 6 jours</h2>
        <div className="activity-container">
          <img className="activity-img" src="/images/map.png" />
          <div className="activity-text-container">
            <p className="activity-text">
              Durée : 6 jours
            </p>
            <p className="activity-text">
              Difficulté: débutant/intermédiaire
            </p>
            <p className="activity-text">
              Prix : À partir de 50$/jour
            </p>
            <p className="activity-text">
              Inclusions: Canot & Navette jusqu'au point de départ 
            </p>
          </div>
          <button className="button reserve">Réserver</button>
        </div>
      </TabPanel>
    </div>
  );
}
