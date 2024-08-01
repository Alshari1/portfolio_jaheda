import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import './Cart.css'

const Cart = () => {
    const [num, setNum] = useState(400)
    const handleLove = () => {
        console.log('Clicked')
       const previousStr = document.getElementById('count').innerText
       const previousNum = parseInt(previousStr)
       const currentNum = previousNum + 1;
       setNum(currentNum)
      const btn =  document.getElementById('heart-btn')
      btn.disabled = true;
      btn.classList.add('red')
    //   console.log(btn)

    }
    return (
        <div className=" flex flex-col flex-wrap space-y-5 bg-base-100 w-80  shadow-xl border rounded-lg">
            <figure className="p-5 ">
                <img className="rounded-lg" src="./../../../public/Pierre Gagnaire.jpeg" alt="" />
            </figure>
            <div className="flex justify-between m-2">
                <p>DEVELOPMENT</p>
                <p><button id="heart-btn" className="hover:cursor-pointer" onClick={handleLove}><FontAwesomeIcon icon={faHeart}/></button> <span id="count">{num}</span></p>
            </div>
            <h2 className="text-2xl font-semibold m-2">The services provide for design</h2>
        </div>
    );
};

export default Cart;