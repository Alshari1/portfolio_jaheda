import Typewriter from 'typewriter-effect';
import pic from '../../../assets/jaheda-7.png'

const Banner = () => {
    return (
        <div id='banner' className="flex flex-col items-center gap-10 text-white">
            <div className="circular_image border border-[#927c45] rounded-full w-56 h-56 p-[2px] bg-[#fec544] overflow-hidden lg:mt-5">
                <img 
                    className='w-full h-full object-cover rounded-full' 
                    src={pic} 
                    alt="Profile" 
                />
            </div>
            <p style={{fontFamily:"Azeret Mono",}} className='text-4xl font-bold'>Jaheda</p>
            <div className='text-2xl font-semibold flex gap-2'>
                I Am
                <span className='text-[#fec544]'>
                <Typewriter 
    options={{
        strings: [
            'Front-end Developer',
            'Back-end Developer',
            'Full Stack Developer',
            'JavaScript Enthusiast',
            'React Specialist',
            'Node.js Expert',
            'Web Developer',,
            'UI/UX Designer',
            'Agile Practitioner'
        ],
        autoStart: true,
        loop: true,
    }}
/>
                </span>
            </div>
        </div>
    );
};

export default Banner;
