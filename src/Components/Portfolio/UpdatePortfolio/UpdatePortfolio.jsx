import { useEffect, useState } from "react";
import Add from "../Add/Add";

const UpdatePortfolio = () => {
    const [singleData, setSingleData] = useState({})
    const id = localStorage.getItem('updated-cart')
    useEffect(() => {
        fetch(`http://localhost:5000/portfolio/${id}`)
            .then(res => res.json())
            .then(data => setSingleData(data))
    }, [id])
    return (
        <div>
            <Add singleData={singleData} id={id} value={'update'}></Add>
        </div>
    );
};

export default UpdatePortfolio;