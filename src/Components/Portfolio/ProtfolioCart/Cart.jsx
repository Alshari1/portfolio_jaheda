import { useContext, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye, faPenFancy, faTrash } from '@fortawesome/free-solid-svg-icons';
// import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import './Cart.css'
import { AuthContext } from "../../Providres/AuthProviders";
import { useNavigate } from "react-router-dom";

const Cart = ({data}) => {
    console.log(data.description.length)
    const {description, title} = data
    const { user } = useContext(AuthContext)
    const [num, setNum] = useState(400)
    const navigate = useNavigate()
    const handleLove = () => {
        console.log('Clicked')
        const previousStr = document.getElementById('count').innerText
        const previousNum = parseInt(previousStr)
        const currentNum = previousNum + 1;
        setNum(currentNum)
        const btn = document.getElementById('heart-btn')
        btn.disabled = true;
        btn.classList.add('red')
        //   console.log(btn)

    }

    const handleViewDetails = () => {
        navigate('/details')
    }
    return (
        <div className=" flex flex-col flex-wrap space-y-5 bg-base-100 w-80  shadow-xl border rounded-lg py-3">
            <figure className="p-5 ">
                <img className="rounded-lg" src="./../../../public/Pierre Gagnaire.jpeg" alt="" />
            </figure>
            <div className="flex justify-between m-2">
                <p>DEVELOPMENT</p>
                <p><button id="heart-btn" className="hover:cursor-pointer" onClick={handleLove}><FontAwesomeIcon icon={faHeart} /></button> <span id="count">{num}</span></p>
            </div>
            <h2 className="text-2xl font-semibold mx-2">{title}</h2>
            <small className={`w-full h-10 px-2 ${description.length > 50 && 'overflow-hidden'}`}>{description}</small>
            {user === 'admin' ? <div className="flex justify-between px-4">
                <FontAwesomeIcon icon={faEye} />
                <FontAwesomeIcon icon={faPenFancy} />
                <FontAwesomeIcon icon={faTrash} />
            </div> : <div className="flex justify-start px-3"><FontAwesomeIcon className="hover:cursor-pointer" onClick={() => handleViewDetails()} icon={faEye} /></div>}
        </div>
    );
};

export default Cart;