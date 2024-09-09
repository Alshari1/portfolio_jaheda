
import { TextField } from "@mui/material";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Add = ({ value, singleData }) => {
    const navigate = useNavigate()
    // console.log(singleData)
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
        // console.log(data)

        fetch('https://portfolio-jaheda.web.app/portfolio', {
            credentials: 'include',
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


        // form.reset()
    }

    const handleUpdate = e => {
        e.preventDefault()
        const id = localStorage.getItem('updated-cart')
        const form = e.target
        const thumbnailUrl = form.thumbnailUrl?.value;
        const portfolioUrl = form.portfolioUrl.value
        const title = form.title.value;
        const description = form.description.value;
        const priceFrom = parseInt(form.priceFrom.value);
        const priceTo = parseInt(form.priceTo.value);
        const industries = form.industries.value;
        const durationFrom = form.durationFrom.value;
        const durationTo = form.durationTo.value;
        const date = moment(new Date()).format("MMM Do YY");
        const data = { thumbnailUrl, portfolioUrl, title, description, priceFrom, priceTo, industries, durationFrom, durationTo, date }
        // console.log(data)
        fetch(`https://portfolio-jaheda.web.app/portfolio/${id}`, {
            credentials: 'include',
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if(data.matchedCount > 0) {
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
                        icon: "warning",
                        title: "Nothing Changed"
                    });
                    localStorage.removeItem('updated-cart')
                    navigate('/')
                }
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
                        title: "Updated Successfully"
                    });
                    localStorage.removeItem('updated-cart')
                    navigate('/')
                }
            })
            .catch(err => {})

    }
    return (
        <div>
            <div>
                <form onSubmit={value === 'Submit' ? handleSubmit : handleUpdate} className=" w-full lg:w-3/5 md:3/5 m-auto border border-[#2b3744] space-y-8 p-6 rounded-lg">
                    <div className="flex gap-2">
                        <TextField
                            id="outlined-basic"
                            name="thumbnailUrl"
                            defaultValue={singleData?.thumbnailUrl}
                            className=" customTextField w-1/2"
                            label="Thumbnail_Url"
                            autoFocus
                            multiline
                            rows={2}
                        />
                        <TextField
                            required
                            name="portfolioUrl"
                            className=" customTextField w-1/2 "
                            label="Portfolio_Url"
                            value={singleData?.portfolioUrl}
                            autoFocus
                            multiline
                            rows={2}
                        />
                    </div>
                    <TextField
                        required
                        name="title"
                        className="customTextField w-full title mt-2"
                        id="outlined-basic"
                        label="Title"
                        multiline
                        defaultValue={singleData?.title}
                    />
                    <TextField
                        required
                        name="description"
                        className=" customTextField w-full border description"
                        label="Description"
                        defaultValue={singleData?.description}

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
                                defaultValue={singleData?.priceFrom}
                                multiline

                            />
                            <TextField
                                required
                                name="priceTo"
                                className=" customTextField w-20 "
                                label="To"
                                defaultValue={singleData?.priceTo}
                                multiline
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                name="industries"
                                className=" customTextField"
                                label="Industries"
                                defaultValue={singleData?.industries}
                                multiline
                            />
                        </div>
                        <div className="w-fit text-center">
                            <p className="mb-2">project_Duration</p>
                            <TextField
                                required
                                name="durationFrom"
                                className=" customTextField w-20"
                                label="From"
                                defaultValue={singleData?.durationFrom}
                                multiline
                            />
                            <TextField
                                required
                                name="durationTo"
                                className=" customTextField w-20 "
                                label="To"
                                defaultValue={singleData?.durationTo}
                                multiline
                            />
                        </div>
                    </div>
                    <div className="text-center w-1/2 m-auto">
                        {value === 'Submit' ? <input className="btn btn-outline w-full" type="submit" value="Submit" /> : <input className="btn btn-outline w-full" type="submit" value="Update" />}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Add;