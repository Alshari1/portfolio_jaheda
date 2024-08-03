import { useContext, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye, faPenFancy, faTrash } from '@fortawesome/free-solid-svg-icons';
// import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import './Cart.css'
import { AuthContext } from "../../Providres/AuthProviders";
import { useNavigate } from "react-router-dom";


const Cart = ({ data, handleDelete }) => {
    const { description, title, thumbnailUrl, _id, heartCount } = data
    const { user } = useContext(AuthContext)
    const [num, setNum] = useState(heartCount)
    const navigate = useNavigate()

    const handleLove = (id) => {
        const updatedText = document.getElementById(_id).innerText;
        console.log(heartCount, _id)
        fetch(`http://localhost:5000/portfolio/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ updatedText })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setNum(num + 1)
                    const btn = document.getElementById(_id + 1)
                    btn.disabled = true;
                    btn.classList.add('red')
                }
            })
            .catch(err => console.log(err))

    }
    const handleUpdate = id => {
        navigate('/portfolio/update')
        localStorage.setItem('updated-cart', id)
    }
    const handleViewDetails = id => {
        navigate('/portfolio/details')
        localStorage.setItem('details-cart', id)
    }


    return (
        <div style={{ width: '19rem' }} className=" flex flex-col flex-wrap space-y-5 bg-base-100 shadow-xl border rounded-lg pb-3">
            <figure className="p-5 ">
                <img className=" rounded-lg max-h-56 w-full" src={thumbnailUrl} alt="image" />
            </figure>
            <div className="flex justify-between m-2">
                <p>DEVELOPMENT</p>
                <p><button id={_id + 1} className="hover:cursor-pointer" onClick={() => handleLove(_id)}><FontAwesomeIcon icon={faHeart} /></button> <span id={_id}>{num}</span></p>
            </div>
            <h2 className="text-2xl font-semibold mx-2">{title}</h2>
            <small className={`w-full h-10 px-2 ${description.length > 50 && 'overflow-hidden'}`}>{description}</small>
            {user !== 'admin' ? <div className="flex justify-between px-4">
                <FontAwesomeIcon className="hover:cursor-pointer" onClick={() => handleViewDetails(_id)} icon={faEye} />
                <FontAwesomeIcon className="hover:cursor-pointer" onClick={() => handleUpdate(_id)} icon={faPenFancy} />
                <FontAwesomeIcon className="hover:cursor-pointer" onClick={() => handleDelete(_id)} icon={faTrash} />
            </div> : <div className="flex justify-start px-3"><FontAwesomeIcon className="hover:cursor-pointer" onClick={() => handleViewDetails(_id)} icon={faEye} /></div>}
        </div>
    );
};

export default Cart;