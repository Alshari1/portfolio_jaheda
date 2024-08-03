import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUserTie, faTrash } from '@fortawesome/free-solid-svg-icons';
const InventoryCart = ({info, handleConfirm}) => {
    const {email, websiteType, _id, status} = info
    console.log(status)
    return (
        <div style={{boxShadow:'0 0 2px green'}} className='flex items-center mx-32 py-2 px-5 rounded-lg min-h-1/2'>
                <div className='mr-10 text-2xl'>
                    <FontAwesomeIcon icon={faUserTie} />
                </div>
                <div className='flex-1'>
                    <p>{email}</p>
                    <p>{websiteType}</p>
                </div>
                <div className='ml-10 text-lg flex items-center gap-4'>
                    {
                        status == 'confirm' ? <small className='text-green-800'>Confirmed</small> : <><small className=' hover:cursor-pointer' onClick={() => handleConfirm(_id)}>Confirm</small>
                    <FontAwesomeIcon icon={faTrash} /></>
                    }
                </div>
            </div>
    );
};

export default InventoryCart;