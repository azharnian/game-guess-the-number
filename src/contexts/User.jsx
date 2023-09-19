import { createContext, useContext, useState } from "react";

export const UserContext = createContext(null);

export function useUserContext() {
    return useContext(UserContext)
}

export function UserProvider({children}) {
    const [userData, setUserData] = useState({
        idPlayer : "",
        player : "",
        attempts : 0,
        bestAttempts : 0
    })

    const updateUserData = data => {
        setUserData({
            ...userData,
            idPlayer : data.idPlayer,
            player : data.player,
            attempts : 0,
            bestAttempts : data.bestAttempts
        })
    }

    const updateIdPlayer = data => {
        setUserData({
            ...userData,
            idPlayer : data
        }) 
    }

    const updatePlayer = data => {
        setUserData({
            ...userData,
            player : data
        }) 
    }

    const resetAttempts = () => {
        setUserData({
            ...userData,
            attempts : 0
        })
    }

    const updateAttempts = () => {
        setUserData({
            ...userData,
            attempts : userData.attempts + 1
        })
    }

    const updateBestAttempts = data => {
        setUserData({
            ...userData,
            bestAttempts : data
        })
    }

    const values = {
        userData,
        updateUserData,
        updateIdPlayer,
        updatePlayer,
        updateAttempts,
        resetAttempts,
        updateBestAttempts
    }

    return (
        <UserContext.Provider value={values}>{children}</UserContext.Provider>
    );
}