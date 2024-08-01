import { TextField } from "@mui/material";
// import './Add.css'

const Add = () => {
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value;
        const description = form.description.value;
        const priceFrom = parseInt(form.priceFrom.value);
        const priceTo = parseInt(form.priceTo.value);
        const industries = form.industries.value;
        const durationFrom = form.durationFrom.value;
        const durationTo = form.durationTo.value;
        const date = new Date()
        const data = {title, description, priceFrom, priceTo, industries, durationFrom, durationTo, date}
        console.log(data)


        form.reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="w-3/5 border m-auto space-y-8 p-6 bg-slate-900 rounded-lg">
                <TextField
                    name="title"
                    className="customTextField w-full title mt-2"
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    multiline
                />
                <TextField
                    name="description"
                    className=" customTextField w-full border description"
                    label="Description"
                    multiline
                />
                <div className="flex flex-col items-center lg:flex-row md:flex-col justify-between">
                    <div className="w-fit text-center">
                        <p className="mb-2">price_Range</p>
                        <TextField
                            name="priceFrom"
                            className=" customTextField w-20"
                            label="From"
                        />
                        <TextField
                            name="priceTo"
                            className=" customTextField w-20 "
                            label="To"
                        />
                    </div>
                    <div>
                        <TextField
                            name="industries"
                            className=" customTextField"
                            label="Industries"
                        />
                    </div>
                    <div className="w-fit text-center">
                        <p className="mb-2">project_Duration</p>
                        <TextField
                            name="durationFrom"
                            className=" customTextField w-20"
                            label="From"
                        />
                        <TextField
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