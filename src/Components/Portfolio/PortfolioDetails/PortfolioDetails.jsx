import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PortfolioDetails = () => {
    const [info, setInfo] = useState('')
    const { portfolioUrl, title,description,priceFrom, priceTo,industries,durationFrom,durationTo,date}  = info
    const navigate = useNavigate()
    const id = localStorage.getItem('details-cart')
    useEffect(() => {
        fetch(`http://localhost:5000/portfolio/${id}`)
            .then(res => res.json())
            .then(data => {
                setInfo(data)
            })
            .catch(err => console.error(err))
    }, [id])
    const handleGoBack = () => {
        localStorage.removeItem('details-cart')
        navigate('/')
    }
    return (
        <div className="flex" style={{ height: '100vh' }}>
            <div className="bg-gray-800 w-1/2 flex justify-center items-center">
                <img style={{ height: '80%' }} className="w-full px-10" src={portfolioUrl} alt="" />
            </div>
            <div className=" flex flex-col justify-center text-justify  w-1/2 bg-slate-800 border p-5 space-y-10 ">
                <p>From: {date}</p>
                <h1 className="text-5xl font-bold">{title}</h1>
                <h2 className="text-xl">{description}</h2>
                <div className="flex justify-around text-center">
                    <div>
                        <p>Price Range</p>
                        <p>$ <span>{priceFrom}</span> - $ <span>{priceTo}</span> </p>
                    </div>
                    <div>
                        <p>Project Duration</p>
                        <p><span>{durationFrom}</span> - <span>{durationTo}</span> days</p>
                    </div>
                    <div>
                        <p>Industries</p>
                        <p>{industries}</p>
                    </div>
                </div>
                <div className="text-center space-x-10">
                    <button onClick={handleGoBack} className="btn btn-outline">Go Back</button>
                    <button className="btn btn-outline">View Project</button>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetails;