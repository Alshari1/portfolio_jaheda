import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
const Education = () => {
    return (
        <div className="flex flex-wrap sm:space-y-12 md:space-y-0 md:space-x-6 lg:space-x-12">
            <div className="border border-emerald-700 p-3 w-96 rounded-lg shadow-xl flex flex-row gap-6">
                <div className='flex items-center'>
                    <FontAwesomeIcon className='text-3xl' icon={faGraduationCap} />
                </div>
                <div className="space-y-1 text-justify">
                    <p className="font-semibold text-lg">Bangladesh Computer Council</p>
                    <p>Diploma in information technology</p>
                    <p><small>Graduated 2020</small></p>
                </div>
            </div>
            <div className="border border-emerald-700 p-3 w-96 rounded-lg shadow-xl flex flex-row gap-6">
                <div className='flex items-center'>
                    <FontAwesomeIcon className='text-3xl' icon={faGraduationCap} />
                </div>
                <div className="space-y-1 text-justify">
                    <p className="font-semibold text-lg">Bohubrihi</p>
                    <p> full stack web development</p>
                    <p><small>Graduated 2020</small></p>
                </div>
            </div>
        </div>
    );
};

export default Education;