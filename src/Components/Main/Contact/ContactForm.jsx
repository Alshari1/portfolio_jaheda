import { MenuItem, TextField } from "@mui/material";
import moment from "moment";
import Swal from "sweetalert2";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const demoUrl = form.demoUrl.value;
        const object = form.object.value;
        const description = form.description.value;
        const websiteType = form.websiteType.value;
        const pages = form.pages.value;
        const budget = form.budget.value;
        const timeSpan = form.timeSpan.value;
        const date = moment(new Date).format('MMMM DD YYYY, h:mm:ss a');
        const clientInfo = { email, demoUrl, object, description, websiteType, pages, budget, timeSpan, date }
        console.log(clientInfo)

        fetch('http://localhost:5000/clients', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(clientInfo)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
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
                        title: "Submitted Successfully"
                    });
                }
            })
            .catch( err => {
                console.log(err)
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
                    icon: "error",
                    title: "Something wrong"
                });
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="border space-y-8 p-6 rounded-lg">
                <TextField
                    name="email"
                    type="email"
                    className="customTextField w-full"
                    id="outlined-basic"
                    label="Email"
                    multiline
                />
                <TextField
                    name="demoUrl"
                    type="text"
                    className="customTextField w-full"
                    id="outlined-basic"
                    label="Demo_Url"
                    placeholder="Sample or any other URL"
                    multiline
                    rows={1}
                />
                <TextField
                    name="object"
                    className="customTextField w-full"
                    id="outlined-basic"
                    label="Object"
                    multiline
                    rows={2}
                />
                <TextField
                    name="description"
                    type="text"
                    className=" customTextField w-full border"
                    label="Your_Message"
                    multiline
                    rows={4}
                />
                <div className="flex gap-2">
                    <TextField
                        type="text"
                        name="websiteType"
                        id="outlined-select-currency"
                        className=" customTextField w-1/2 "
                        label="Website_Type"
                        placeholder={'Business/Portfolio/Ecom.'}
                    />

                    <TextField
                        type="text"
                        name="pages"
                        className=" customTextField w-1/2 "
                        label="Pages"
                        placeholder="0 pages"
                    />
                </div>
                <div className="flex gap-2">
                    <TextField
                        type="text"
                        id="outlined-select-currency"
                        className=" customTextField w-1/2 "
                        label="Budget"
                        name="budget"
                        placeholder="10$ - 10$"
                    />

                    <TextField
                        type="text"
                        name="timeSpan"
                        className=" customTextField w-1/2 "
                        label="Time_Span"
                        placeholder="7 - 20 days"
                    />
                </div>
                <input className="btn btn-outline w-full" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ContactForm;