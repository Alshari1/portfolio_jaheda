import { useLoaderData, useNavigate } from 'react-router-dom';
import InventoryCart from './InventoryCart';
import Swal from 'sweetalert2';
import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../Providres/AuthProviders';


const Inventory = () => {
    const navigate = useNavigate()
    const data = useLoaderData()
    const [display, setDisplay] = useState(data)
    const { logout } = useContext(AuthContext)

    const handleConfirm = id => {
        fetch(`https://portfolio-jaheda.web.app/clients/${id}`, {
            credentials: 'include',
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
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
            .catch(err => {})
    }
    const handleDelete = id => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-error"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://portfolio-jaheda.web.app/clients/${id}`, {
                    credentials: 'include',
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            swalWithBootstrapButtons.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = display.filter(data => data._id !== id);
                            setDisplay(remaining)
                        }
                    })
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });
    }

    const handleLogout = () => {
        navigate('/')
        logout()

    }
    return (
        <div className=" border bg-[#111827] border-[#2b3744] space-y-5">
            <h1 className='mt-5 relative pl-auto text-right space-x-6'>
                <span className='absolute -top-4 right-10 text-yellow-600'>{display.length}</span>
                <FontAwesomeIcon icon={faCartShopping} />
                <FontAwesomeIcon onClick={handleLogout} icon={faRightFromBracket} />

            </h1>
            {
                display.map(info => <InventoryCart
                    key={info._id}
                    info={info}
                    handleConfirm={handleConfirm}
                    handleDelete={handleDelete}
                ></InventoryCart>)
            }
        </div>
    );
};

export default Inventory;