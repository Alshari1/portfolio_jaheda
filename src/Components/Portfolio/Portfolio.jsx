import { useEffect, useState } from "react";
import Cart from "./ProtfolioCart/Cart";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
  const [info, setInfo] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {
    fetch('http://localhost:5000/portfolio')
      .then(res => res.json())
      .then(data => setInfo(data))
      .catch(err => console.error(err))
  }, [])

  const handleAdd = () => {
    navigate('./portfolio/add')
  }
  return (
    <div>
      <div>
        {
          info && info.map(data => <Cart key={data._id} data={data} ></Cart>)
        }
      </div>
      <div className="text-end pt-8 ">
        <button onClick={handleAdd} className="btn btn-outline rounded-2xl animate-bounce">
          <FontAwesomeIcon className="text-xl" icon={faPlus} />
        </button>
      </div>
    </div>
  );
};

export default Portfolio;