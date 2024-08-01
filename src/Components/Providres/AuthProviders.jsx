import { createContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext(null)
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [id, setId] = useState(null)
    // const navigate = useNavigate()
    const handleViewDetails = (id) => {
        setId(id)
        console.log('clicked')
        // navigate('/details')

    }

    const authInfo = {
        user,
        setUser,
        handleViewDetails,
        id
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;