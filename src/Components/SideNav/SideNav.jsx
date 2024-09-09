import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSuitcase, faBoxesStacked, faUserGroup, faUser, faCartShopping, faIdCardClip, faCarOn, faRightFromBracket, faXmark, faCrown } from '@fortawesome/free-solid-svg-icons';
import './SideNav.css';
import React, { useContext, useState } from "react";
import { AuthContext } from "../Providres/AuthProviders";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Swal from 'sweetalert2';

const SideNav = ({ show, setShow }) => {
    const { user, googleSignIn, logout } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const [adminInput, setAdminInput] = useState('');
// console.log( adminInput)

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleClose();

        if (adminInput === import.meta.env.VITE_USER) {
            googleSignIn()
                .catch(error => {
                    console.error("Google Sign-In Error:", error);
                });
        } else {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                customClass: {
                    container: 'custom-toast-error',        
                },
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            
            Toast.fire({
                icon: "error",
                title: "Unauthorized"
            });
            
            
        }
    };

    const handleLogout = () => {
        logout();
        setAdminInput('')
    };

    const handleCloseBar = () => {
        setShow(false);
    };

    return (
        <>
            <React.Fragment>
                <Dialog
                    open={open}
                    onClose={handleClose}
                >
                    <form onSubmit={handleSubmit}>
                        <DialogTitle>Admin Login</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Please enter the admin code to access the admin features.
                            </DialogContentText>
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="name"
                                name="text"
                                label="Admin Code"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={adminInput}
                                autoComplete='off'
                                onChange={(e) => setAdminInput(e.target.value)}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">Submit</Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </React.Fragment>
            <div className={`nav-container flex flex-col justify-center border border-[#2b3744] bg-slate-900 w-[282px] h-[100vh] lg:w-full overflow-x-hidden overflow-y-auto lg:flex  gap-8 ${show ? 'flex absolute lg:fixed lg:top-0 slide-in' : 'hidden slide-out'}`}>
                {
                    show && <span className="text-end pr-5 hover:cursor-pointer"><FontAwesomeIcon onClick={handleCloseBar} className="lg:hidden" icon={faXmark} /></span>
                }
                <a href='#banner'><span><FontAwesomeIcon icon={faHouse} /></span>HOME</a>
                <a href='#features'><span><FontAwesomeIcon icon={faSuitcase} /></span>FEATURES</a>
                <a href='#portfolio'><span><FontAwesomeIcon icon={faBoxesStacked} /></span>PORTFOLIO</a>
                <a href='#resume'><span><FontAwesomeIcon icon={faUserGroup} /></span>RESUME</a>
                <a href='/'><span><FontAwesomeIcon icon={faUser} /></span>CLIENTS</a>
                <a href='/'><span><FontAwesomeIcon icon={faCartShopping} /></span>PRICING</a>
                <a href='#contact'><span><FontAwesomeIcon icon={faIdCardClip} /></span>CONTACT</a>
                {
                    user && <a href="/inventory"><FontAwesomeIcon icon={faCarOn} />Inventory</a>
                }
                {
                    !user ? <a onClick={() => setOpen(true)}><span><FontAwesomeIcon icon={faCrown} /></span>ADMIN ?</a> : <span onClick={handleLogout} className="text-end pr-5 hover:cursor-pointer lg:pr-10"><FontAwesomeIcon onClick={handleLogout} icon={faRightFromBracket} /></span>
                }
            </div>
        </>
    );
};

export default SideNav;