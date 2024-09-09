import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import { Typography } from '@mui/material';

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
                    <Typography component="div">{children}</Typography>
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
        <div id='resume' className='relative'>
            <Box className="custom-box z-10">
                <AppBar position="static" className="custom-appbar custom-tab-indicator">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab sx={{
                            fontSize: {
                                lg: '1.5rem',
                                md:'1.25rem',
                                sm: '1rem'
                            }
                        }} label="Education" {...a11yProps(0)} />
                        <Tab sx={{
                            fontSize: {
                                lg: '1.25rem',
                                md:'1.25rem',
                                sm: '1rem'
                            }
                        }} label="My skills" {...a11yProps(1)} />
                        <Tab sx={{
                            fontSize: {
                                lg: '1.25rem',
                                md:'1.25rem',
                                sm: '1rem'
                            }
                        }} label="Experience" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel className='lg:h-80 flex items-center justify-center' value={value} index={0} dir={theme.direction}>
                        <Education></Education>
                    </TabPanel>
                    <TabPanel className='lg:h-80 flex items-center justify-center' value={value} index={1} dir={theme.direction}>
                    </TabPanel>
                    <TabPanel className='lg:h-80 flex items-center justify-center' value={value} index={2} dir={theme.direction}>
                        <Experience></Experience>
                    </TabPanel>
                </SwipeableViews>
            </Box>
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export default MyResume;