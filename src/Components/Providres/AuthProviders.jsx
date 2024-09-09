import { createContext, useEffect, useRef, useState } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../../../firebase.config';


export const AuthContext = createContext(null)

const AuthProviders = ({ children }) => {
    const auth  = getAuth(app)
    const provider = new GoogleAuthProvider();
    const [loading , setLoading] = useState(true)
    const [user,setUser] = useState(null)

    const googleSignIn = () => {
        setLoading(true)
       return signInWithPopup(auth, provider)
    }

    const logout = ()=> {
        return signOut(auth)
    }

 useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, currentuser => {
        setUser(currentuser)
        setLoading(false)
        
    })
    return () => {
        unsuscribe()
    }
},[auth])

    const authInfo = {
        googleSignIn,
        logout,
        user,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;