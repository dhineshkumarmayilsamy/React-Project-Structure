import React, { useState, useEffect, useContext, createContext } from 'react'

const authContext = createContext()

export function AuthProvider({ children }) {
    const auth = useProvideAuth()
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
    return useContext(authContext)
}

function useProvideAuth() {
    const local = JSON.parse(localStorage.getItem("token"));
    const [user, setUser] = useState(local)
    const [loading, setLoading] = useState(true)

    const handleUser = (rawUser) => {
        if (rawUser) {
            const user = formatUser(rawUser)
            setLoading(false)
            setUser(user)

            localStorage.setItem("token",JSON.stringify(user))

            return user
        } else {
            setLoading(false)
            setUser(false)

            localStorage.removeItem("token")
            
            return false
        }
    }

    const signin = () => {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    {
                        uid: 1,
                        email: "test@example.com",
                        displayName: "Dhinesh",
                        isLoggedin: true
                    });
            }, 300);
        });

        setLoading(true)

        return promise
            .then((response) => handleUser(response));

        // return firebase
        //     .auth()
        //     .signInWithPopup(new firebase.auth.GithubAuthProvider())
        //     .then((response) => handleUser(response.user))
    }

    const signout = () => {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 300);
        });

        return promise
            .then(() => handleUser(false))

        // return firebase
        //     .auth()
        //     .signOut()
        //     .then(() => handleUser(false))
    }

    useEffect(() => {
        // const unsubscribe = firebase.auth().onAuthStateChanged(handleUser)
        // return () => unsubscribe()

    }, [])

    return {
        user,
        loading,
        signin,
        signout,
    }
}

const formatUser = (user) => {
    return {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        isLoggedin: user.isLoggedin
        // provider: user.providerData[0].providerId,
        // photoUrl: user.photoURL,
    }
}