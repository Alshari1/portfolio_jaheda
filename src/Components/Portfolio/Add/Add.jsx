import { TextField } from "@mui/material";
import moment from "moment";
import Swal from "sweetalert2";
// import './Add.css'

const Add = () => {
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const thumbnailUrl = form.thumbnailUrl.value;
        const portfolioUrl = form.portfolioUrl.value
        const title = form.title.value;
        const description = form.description.value;
        const priceFrom = parseInt(form.priceFrom.value);
        const priceTo = parseInt(form.priceTo.value);
        const industries = form.industries.value;
        const durationFrom = form.durationFrom.value;
        const durationTo = form.durationTo.value;
        const date = moment(new Date()).format("MMM Do YY");
        const heartCount = 10
        const data = { thumbnailUrl, portfolioUrl, title, description, priceFrom, priceTo, industries, durationFrom, durationTo, date, heartCount }
        console.log(data)

        fetch('http://localhost:5000/portfolio', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
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
                        title: "Data inserted successfully"
                    });
                }
                else {
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
                        title: "Please try agian"
                    });
                }
            })
            .catch(err => {
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
                    title: `${err}`
                });
            })


        form.reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="w-3/5 border m-auto space-y-8 p-6 bg-slate-900 rounded-lg">
                <div className="flex gap-2">
                    <TextField
                        required
                        name="thumbnailUrl"
                        className=" customTextField w-1/2"
                        label="Thumbnail_Url"
                    />
                    <TextField
                        required
                        name="portfolioUrl"
                        className=" customTextField w-1/2"
                        label="Portfolio_Url"
                    />
                </div>
                <TextField
                    required
                    name="title"
                    className="customTextField w-full title mt-2"
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    multiline
                />
                <TextField
                    required
                    name="description"
                    className=" customTextField w-full border description"
                    label="Description"
                    multiline
                />
                <div className="flex flex-col items-center lg:flex-row md:flex-col justify-between">
                    <div className="w-fit text-center">
                        <p className="mb-2">price_Range</p>
                        <TextField
                            required
                            name="priceFrom"
                            className=" customTextField w-20"
                            label="From"
                        />
                        <TextField
                            required
                            name="priceTo"
                            className=" customTextField w-20 "
                            label="To"
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            name="industries"
                            className=" customTextField"
                            label="Industries"
                        />
                    </div>
                    <div className="w-fit text-center">
                        <p className="mb-2">project_Duration</p>
                        <TextField
                            required
                            name="durationFrom"
                            className=" customTextField w-20"
                            label="From"
                        />
                        <TextField
                            required
                            name="durationTo"
                            className=" customTextField w-20 "
                            label="To"
                        />
                    </div>
                </div>
                <div className="text-center w-1/2 m-auto">
                    <input className="btn btn-outline w-full" type="submit" value="submit" />
                </div>
            </form>
        </div>
    );
};

export default Add;