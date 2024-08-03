import { useLoaderData } from 'react-router-dom';
import InventoryCart from './InventoryCart';
import Swal from 'sweetalert2';
import { useState } from 'react';

const Inventory = () => {
    const data = useLoaderData()
    const [display, setDisplay] = useState(data)
    console.log(display)
    const handleConfirm = id => {
        fetch(`http://localhost:5000/clients/${id}`, {
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status: 'confirm'})
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
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
                        title: "Confirmed"
                    });
                }
                const remaining = display.filter(data => data._id !== id);
                const updated = display.find(data => data._id === id);
                updated.status = 'confirm'
                const newDisplay = [updated, ...remaining]
                setDisplay(newDisplay)
            })
            .catch (err => console.log(err))
    }
return (
    <div className="border w-4/5 m-auto space-y-5">
        {
            display.map(info => <InventoryCart
                key={info._id}
                info={info}
                handleConfirm={handleConfirm}
            ></InventoryCart>)
        }
    </div>
);
};

export default Inventory;