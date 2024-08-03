import { useEffect, useState } from "react";
import Cart from "./ProtfolioCart/Cart";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Swal from "sweetalert2";

const Portfolio = () => {
  const [info, setInfo] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {
    fetch('http://localhost:5000/portfolio')
      .then(res => res.json())
      .then(data => {
        setInfo(data)
      })
      .catch(err => console.error(err))
  }, [])

  const handleDelete = id => {
    fetch(`http://localhost:5000/portfolio/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          const remaining = info.filter(data => data._id !== id)
          setInfo(remaining)
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Deleted Successfully"
          });
        }
      })
      .catch(err => console.log(err))
  }

  const handleAdd = () => {
    navigate('./portfolio/add')
  }
  return (
    <div>
      <div className="flex lg:grid grid-cols-3 flex-wrap justify-center gap-8 ">
        {
          info && info.map(data => <Cart
            key={data._id}
            data={data}
            handleDelete={handleDelete}
          ></Cart>)
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