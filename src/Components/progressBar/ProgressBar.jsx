import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '80%', mr: 1 }}>
                <LinearProgress 
                    variant="determinate" 
                    {...props}
                    sx={{
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: '#000000', // Custom background color
                        '& .MuiLinearProgress-bar': {
                            background: 'linear-gradient(90deg, #ca9723 0%, #ff3434 50%, #ffbf00 100%)', // Gradient color
                        },
                    }}
                />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" style={{color:'white'}}>{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};

export default function ProgressBar ({value}) {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= value ? value : prevProgress + 1));
        }, 50);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgressWithLabel value={progress} />
        </Box>
    );
}
