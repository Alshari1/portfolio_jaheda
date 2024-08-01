// import Typewriter from 'typewriter-effect';
const Banner = () => {
    return (
        <div className="flex flex-col items-center gap-10">
            <div className="w-56 h-56 border rounded-full p-2">
            </div>
            <p className='text-3xl'>JAHEDA</p>
            <p className='text-3xl flex gap-2'>
                I AM
                {/* <Typewriter 
                    options={{
                        strings: ['BOKA-14', 'FOINNI'],
                        autoStart: true,
                        loop: true,
                    }}
                /> */}
            </p>
            <div>
                <button className="btn btn-outline">Contact Me</button>
            </div>
        </div>
    );
};

export default Banner;