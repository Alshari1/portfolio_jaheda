// import { Card } from "flowbite-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import fivericon from '../../../assets/10813996_fiverr_icon.svg';
import upworkIcon from '../../../assets/1929180_upwork_icon.svg'

const Pricing = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <div
            className={`card-container ${isFlipped ? 'flipped' : ''}`}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <div className="card">
                <div className="card-front">
                    <div className="space-y-5 border border-[#2b3744] h-[693px] p-6 rounded-lg text-justify text-white">
                        <h1 className="mb-3 text-3xl font-medium dark:text-gray-400">Contact info</h1>
                        <p><span className="text-3xl text-[#fec544]">Greetings</span>, I'm a Professional Front-end Developer and CMS(Wix, WordPress, Shopify, Squarespace) Expert. I can configuration, make, upgrade, Customize, deal with different kinds of websites by Cms or custom coding. I have done numerous activities with incredible accomplishments. Customer Satisfaction is the principal thing for me.</p>
                        <p className="text-justify">We'd love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help. You can reach us through the following methods :</p>
                        <div className="flex flex-row items-center gap-5" >
                            <div className=" p-2 text-2xl">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div>
                                <p>abc@gamil.com</p>
                                <p>abc@gamil.com</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-5" >
                            <div className=" p-2 text-2xl">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div>
                                <p>+1 876-369-9009</p>
                                <p>+1 876-369-9009</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-5" >
                            <div className=" p-2 text-2xl">
                                <FontAwesomeIcon icon={faLocationDot} />
                            </div>
                            <div>
                                <p>2661 High Meadow Lane Bear Creek,</p>
                                <p>Chattogram, Bangladesh</p>
                            </div>
                        </div>
                        <p>Visite my social profile and get connected -</p>
                        <div>
                            <div className="flex justify-around lg:px-28">
                                <div className="text-3xl p-3 rounded-lg border border-[#2b3744] bg-slate-900 w-fit">
                                    <FaLinkedin />
                                </div>
                                <div className="text-4xl p-3 rounded-lg border border-[#2b3744] bg-slate-900 w-fit">
                                    <img className=" bg-white h-7 rounded" src={fivericon} alt="" />
                                </div>
                                <div className="text-4xl p-3 rounded-lg border border-[#2b3744] bg-slate-900 w-fit">
                                    <img className="bg-white h-7 rounded" src={upworkIcon} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-back">
                    {/* <Card style={{ height: '545px' }} className='w-full'>
                        <h5 className="mb-3 text-3xl font-medium text-gray-500 dark:text-gray-400">Standard plan</h5>
                        <div className="flex items-baseline text-gray-900 dark:text-white">
                            <span className="text-3xl font-semibold">$</span>
                            <span className="text-5xl font-extrabold tracking-tight">49</span>
                            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                        </div>
                        <div className="flex w-full flex-col lg:flex-row justify-between mt-5">
                            <ul className="my-7 space-y-5 rounded-box">
                                <li className="flex space-x-3 items-center">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
                                </li>
                                <li className="flex space-x-3 items-center">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
                                </li>
                                <li className="flex space-x-3 items-center">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
                                </li>
                                <li className="flex space-x-3 items-center">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
                                </li>
                                <li className="flex space-x-3 items-center">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
                                </li>
                                <li className="flex space-x-3 items-center">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
                                </li>
                                <li className="flex space-x-3 items-center">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
                                </li>
                                <li className="flex space-x-3 items-center">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
                                </li>
                            </ul>
                            <div className="divider lg:divider-horizontal"></div>
                            <ul className="my-7 space-y-5 rounded-box">
                                <li className="flex space-x-3 items-center">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
                                </li>
                                <li className="flex space-x-3 items-center">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
                                </li>
                                <li className="flex space-x-3 items-center">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
                                </li>
                                <li className="flex space-x-3 items-center">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
                                </li>
                                <li className="flex space-x-3 items-center">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
                                </li>
                                <li className="flex space-x-3 items-center">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
                                </li>
                                <li className="flex space-x-3 items-center">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
                                </li>
                                <li className="flex space-x-3 items-center">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
                                </li>
                            </ul>
                        </div>
                    </Card> */}
                </div>
            </div>
        </div>
    );
};

export default Pricing;