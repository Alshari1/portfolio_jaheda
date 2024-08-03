import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';

const TabPanel = props => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
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

const a11yProps = index => {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const MyResume = () => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Box className="custom-box">
            <AppBar position="static" className="custom-appbar custom-tab-indicator">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab sx={{ fontSize: '1.25rem' }} label="About me" {...a11yProps(0)} />
                    <Tab sx={{ fontSize: '1.25rem' }} label="Education" {...a11yProps(1)} />
                    <Tab sx={{ fontSize: '1.25rem' }} label="My skills" {...a11yProps(2)} />
                    <Tab sx={{ fontSize: '1.25rem' }} label="Experience" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel className='h-80 flex items-center justify-center' value={value} index={0} dir={theme.direction}>
                    <div>
                        Greetings, I'm a Professional Front-end Developer and CMS(Wix, WordPress, Shopify, Squarespace) Expert. I can configuration, make, upgrade, Customize, deal with different kinds of websites by Cms or custom coding. I have done numerous activities with incredible accomplishments. Customer Satisfaction is the principal thing for me. If you need anything, please don't hesitate to get in touch with me. I will give you my best support perpetually with my work. Thanks
                    </div>
                </TabPanel>
                <TabPanel className='h-80 flex items-center justify-center' value={value} index={1} dir={theme.direction}>
                    <Education></Education>
                </TabPanel>
                <TabPanel className='h-80 flex items-center justify-center' value={value} index={2} dir={theme.direction}>
                    <Skills></Skills>
                </TabPanel>
                <TabPanel className='h-80 flex items-center justify-center' value={value} index={3} dir={theme.direction}>
                    <Experience></Experience>
                </TabPanel>
            </SwipeableViews>
        </Box>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export default MyResume;