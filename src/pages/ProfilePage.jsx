import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { useUserContext } from "../contexts/User"

export default function ProfilePage(){
    const {userData} = useUserContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (!userData.player)
        navigate("/")
    },[])
    
    if (userData.player)
        return (
            <section className="container">
                <h1>Your Profile Here</h1>
            </section>
        )
    
}