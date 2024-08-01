import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
const TopNav = ({handleSideNav}) => {
    return (
        <nav className='flex justify-between p-5 text-xl lg:hidden'>
            <div>
                <img src="" alt="" />
                <p>Jaheda</p>
            </div>
            <div onClick={handleSideNav}>
                <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
            </div>
        </nav>
    );
};

export default TopNav;