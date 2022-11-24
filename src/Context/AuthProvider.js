import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged } from "firebase/auth"

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const createuser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (userinfo) => {
        return updateProfile(auth.currentuser, userinfo)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth);
    }

    // const googleSignin = (provider) => {
    //     return signInWithPopup(auth, provider)
    // }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, curruntuser => {
            setLoading(false)
            console.log('observer is observed');
            setUser(curruntuser)
        })
        return () => unsubscribe()
    }, [])
    const authinfo = {
        createuser,
        signIn,
        updateUser,
        logout,
        user,
        loading,
        // googleSignin

    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;