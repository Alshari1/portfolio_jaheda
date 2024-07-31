import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSuitcase, faBoxesStacked, faUserGroup, faUser, faCartShopping, faImage, faIdCardClip } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import './SideNav.css'
const SideNav = () => {
    return (
        <div className="border hidden md:hidden lg:flex flex-col gap-6 lg:w-1/4">

            <NavLink to='/'><span><FontAwesomeIcon icon={faHouse} /></span>HOME</NavLink>
            <NavLink to='/'><span><FontAwesomeIcon icon={faSuitcase} /></span>FEATURES</NavLink>
            <NavLink to='/'><span><FontAwesomeIcon icon={faBoxesStacked} /></span>PORTFOLIO</NavLink>
            <NavLink to='/'><span><FontAwesomeIcon icon={faUserGroup} /></span>RESUME</NavLink>
            <NavLink to='/'><span><FontAwesomeIcon icon={faUser} /></span>CLIENTS</NavLink>
            <NavLink to='/'><span><FontAwesomeIcon icon={faCartShopping} /></span>PRICING</NavLink>
            <NavLink to='/'><span><FontAwesomeIcon icon={faImage} /></span>BLOG</NavLink>
            <NavLink to='/'><span><FontAwesomeIcon icon={faIdCardClip} /></span>CONTACT</NavLink>
            <hr />
            <div className="text-center flex flex-col justify-center items-center gap-8">
                <h1 className="text-sm tracking-wide">FIND WITH ME</h1>
                <div className="icon-container flex gap-5">
                    <div className="text-3xl p-3 rounded-lg shadow-custom bg-slate-900">
                        <FaFacebook/>
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