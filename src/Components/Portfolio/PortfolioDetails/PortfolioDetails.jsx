const PortfolioDetails = () => {
        return (
        <div className="flex" style={{height:'100vh'}}>
            <div  className="bg-gray-800 w-1/2 flex justify-center items-center">
            <img style={{height:'80%'}} className="w-full px-10" src="./../../../../public/Pierre Gagnaire.jpeg" alt="" />
            </div>
            <div className=" flex flex-col justify-center text-justify  w-1/2 bg-slate-800 border p-5 space-y-10 ">
            <p>From: March 2021</p>
            <h1 className="text-5xl font-bold">Sport Club Website</h1>
            <h2 className="text-xl">Developed a professional sports club website on WordPress. Enhanced user experience and search visibility with Elementor, SEO, and Cloudflare CDN.</h2>
            <div className="flex justify-around text-center">
                <div>
                    <p>Price Range</p>
                    <p>$ <span>400</span> - $ <span>600</span> </p>
                </div>
                <div>
                    <p>Project Duration</p>
                    <p><span>7</span> - <span>30</span> days</p>
                </div>
                <div>
                    <p>Industries</p>
                    <p>Sport Event</p>
                </div>
            </div>
            <div className="text-center space-x-10">
                <button className="btn btn-outline">Go Back</button>
                <button className="btn btn-outline">View Project</button>
            </div>
            </div>
        </div>
    );
};

export default PortfolioDetails;