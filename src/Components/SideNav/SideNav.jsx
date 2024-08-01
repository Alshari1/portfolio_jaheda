import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSuitcase, faBoxesStacked, faUserGroup, faUser, faCartShopping, faImage, faIdCardClip } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import './SideNav.css'
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Providres/AuthProviders";
const SideNav = ({ show }) => {
    const {setUser, user} = useContext(AuthContext)
    console.log(user)
    const handleAdmin = async () => {
        try {
            const ipAPI = "https://api.ipify.org?format=json";
            const response = await fetch(ipAPI);
            const data = await response.json();
            const inputValue = data.ip;
    
            const result = await Swal.fire({
                title: "Welcome Chef",
                input: "text",
                inputLabel: "",
                inputValue,
                showCancelButton: true,
                cancelButtonColor: "#d33",
                inputValidator: (value) => {
                    if (!value) {
                        return Swal.fire({
                            icon: "error",
                            title: "Unauthorized",
                          });
                    }
                    if(value !== 'admin'){
                        return Swal.fire({
                            icon: "error",
                            title: "Unauthorized",
                          });
                    }
                }
            });
            if (result.value === 'admin') {
                Swal.fire(`welcome chief`);
                setUser('admin')
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire('An error occurred. Please try again later.');
        }
    };
    
    return (
        <div className={`nav-container lg:flex flex-col gap-6 ${show ? 'flex absolute lg:fixed lg:top-0 top-20 z-10 slide-in ' : 'hidden slide-out'}`}>

            <NavLink to='/'><span><FontAwesomeIcon icon={faHouse} /></span>HOME</NavLink>
            <NavLink to='/'><span><FontAwesomeIcon icon={faSuitcase} /></span>FEATURES</NavLink>
            <NavLink to='/'><span><FontAwesomeIcon icon={faBoxesStacked} /></span>PORTFOLIO</NavLink>
            <NavLink to='/'><span><FontAwesomeIcon icon={faUserGroup} /></span>RESUME</NavLink>
            <NavLink to='/'><span><FontAwesomeIcon icon={faUser} /></span>CLIENTS</NavLink>
            <NavLink to='/'><span><FontAwesomeIcon icon={faCartShopping} /></span>PRICING</NavLink>
            <NavLink to='/'><span><FontAwesomeIcon icon={faImage} /></span>BLOG</NavLink>
            <NavLink to='/'><span><FontAwesomeIcon icon={faIdCardClip} /></span>CONTACT</NavLink>
            <span onClick={handleAdmin} className="text-end hover:cursor-pointer">διαχειριστής ?</span>
            <hr />
            <div className="text-center flex flex-col justify-center items-center gap-8">
                <h1 className="text-sm tracking-wide">FIND WITH ME</h1>
                <div className="icon-container flex gap-5">
                    <div className="text-3xl p-3 rounded-lg shadow-custom bg-slate-900">
                        <FaFacebook />
                    </div>
                    <div className="text-3xl p-3 rounded-lg shadow-custom bg-slate-900">
                        <FaInstagram />
                    </div>
                    <div className="text-3xl p-3 rounded-lg shadow-custom bg-slate-900">
                        <FaLinkedin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideNav;