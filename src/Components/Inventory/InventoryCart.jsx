import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faTrash, faClose } from '@fortawesome/free-solid-svg-icons';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';
const InventoryCart = ({ info, handleConfirm, handleDelete }) => {
    const [open, setOpen] = useState(false);
    const { email, websiteType, _id, status, demoUrl, object, description, pages, budget, timeSpan, date } = info
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div>
                <React.Fragment>
                    <Dialog
                    style={{
                        color:'#2b3744'
                    }}
                        fullScreen
                        open={open}
                        onClose={handleClose}
                        // sx={{
                        //     color:'primary'
                        // }}
                    >
                        <AppBar sx={{ position: 'relative' }}>
                            <Toolbar>
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    onClick={handleClose}
                                    aria-label="close"
                                >
                                    <FontAwesomeIcon icon={faClose} />
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                        <List>
                            <ListItemText
                                primary="Date"
                                secondary={date} />
                            <Divider />
                            <ListItemText
                                primary="ClientId"
                                secondary={_id} />
                            <Divider />
                            <ListItemText
                                primary="Email"
                                secondary={email} />
                            <Divider />
                            <ListItemText
                                primary="Demourl"
                                secondary={demoUrl} />
                            <Divider />
                            <ListItemText
                                primary="Object"
                                secondary={object} />
                            <Divider />
                            <ListItemText
                                primary="Description"
                                secondary={description} />
                            <Divider />
                            <ListItemText
                                primary="Pages"
                                secondary={pages} />
                            <Divider />
                            <ListItemText
                                primary="Budget"
                                secondary={budget} />
                            <Divider />
                            <ListItemText
                                primary="TimeSpan"
                                secondary={timeSpan} />
                            <Divider />
                        </List>
                    </Dialog>
                </React.Fragment>
            </div>
            <div  className='flex text-center items-center flex-col md:flex-row lf:flex-row border border-[#2b3744] text-white lg:mx-32 py-2 px-5 rounded-lg min-h-1/2'>
                <div className='md:mr-10 lg:mr-10 text-2xl'>
                    <FontAwesomeIcon onClick={handleClickOpen} icon={faUserTie} />
                </div>
                <div className='flex-1'>
                    <p>{email}</p>
                    <p>{websiteType}</p>
                </div>
                <div className='text-lg flex items-center justify-center gap-4'>
                    {
                        status == 'confirm' ? <small className='text-green-800'>Confirmed</small> : <><small className=' hover:cursor-pointer' onClick={() => handleConfirm(_id)}>Confirm</small>
                            <FontAwesomeIcon onClick={() => handleDelete(_id)} icon={faTrash} /></>
                    }
                </div>
            </div>
        </>
    );
};

export default InventoryCart;