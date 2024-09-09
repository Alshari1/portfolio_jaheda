import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-center">
            <h1 className="text-6xl font-bold text-white">404</h1>
            <p className="text-2xl text-gray-400 mb-4">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="text-xl text-blue-500 hover:text-blue-300 transition duration-300 flex justify-center">Go Back Home</Link>
        </div>
    );
};

export default NotFound;
