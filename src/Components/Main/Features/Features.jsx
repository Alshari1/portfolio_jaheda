import reactIcon from './../../../assets/physics.png'
import codingIcon from './../../../assets/coding.png'
import javaIcon from './../../../assets/javascript.png'
import wordpressIcon from './../../../assets/wordpress.png'
import responsiveIcon from './../../../assets/responsive.png'
import uiIcon from './../../../assets/ux-design.png'
import backEndIcon from './../../../assets/database-storage.png'
import authIcon from './../../../assets/two-factor-authentication.png'

const Features = () => {
    return (
        <div id='features' style={{ justifyItems: 'center' }} className="grid justify-center grid-cols-1 md:grid-cols-3 gap-14 features-container">
            <div className=" feature space-y-5 shadow-xl ">
                <figure className='m-auto w-fit'>
                    <img style={{ color: 'red' }} className='h-16' src={codingIcon} alt="" />
                </figure>
                <h2 className="text-2xl font-semibold">Expert Coder</h2>
                <p>As a skilled coder, I turn complex problems into efficient solutions through code. My expertise spans various languages and technologies, driving innovation.</p>
            </div>
            <div className=" feature space-y-5 shadow-xl ">
                <figure className='m-auto  w-fit'>
                    <img className='h-16' src={javaIcon} alt="" />
                </figure>
                <h2 className="text-2xl font-semibold">JavaScript Pro</h2>
                <p>I excel in JavaScript, crafting dynamic web applications with seamless interactions. My proficiency in JS frameworks boosts user engagement and functionality.
                </p>
            </div>

            <div className=" feature space-y-5 shadow-xl ">
                <figure className='m-auto  w-fit'>
                    <img className='h-16' src={reactIcon} alt="" />
                </figure>
                <h2 className="text-2xl font-semibold">React Specialist</h2>
                <p>I excel in React, building dynamic and efficient user interfaces. My expertise includes hooks, components, and state management to create seamless web apps.
                </p>
            </div>
            <div className=" feature space-y-5 shadow-xl ">
                <figure className='m-auto  w-fit'>
                    <img className='h-16' src={responsiveIcon} alt="" />
                </figure>
                <h2 className="text-2xl font-semibold">Responsive Design</h2>
                <p>My responsive design skills ensure your site looks perfect on any device. I create adaptable layouts that enhance user experience across all screen sizes.
                </p>
            </div>
            <div className=" feature space-y-5 shadow-xl ">
                <figure className='m-auto  w-fit'>
                    <img className='h-16' src={uiIcon} alt="" />
                </figure>
                <h2 className="text-2xl font-semibold">Wix Website Expert</h2>
                <p>With expertise in UI/UX design, I build intuitive interfaces that captivate users. My designs focus on user needs, enhancing usability and overall satisfaction.
                </p>
            </div>
            <div className=" feature space-y-5 shadow-xl ">
                <figure className='m-auto  w-fit'>
                    <img className='h-16' src={wordpressIcon} alt="" />
                </figure>
                <h2 className="text-2xl font-semibold">CMS Specialist</h2>
                <p>I leverage Wix to create stunning, functional websites with ease. My experience with this platform ensures a polished look and smooth user experience.
                </p>
            </div>
        </div>
    );
};

export default Features;

