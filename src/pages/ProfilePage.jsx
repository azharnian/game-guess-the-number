import { useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"

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
                <h1>Hi {userData.player} !</h1>

                <section className="sub-container">
                    <ul className="list-profile">
                        <li>
                            <Link to={"/about"}>❓ About Game</Link>
                        </li>
                        <li>
                            <Link to="/howto">🛝 How To Play</Link>
                        </li>
                        <li>
                            <Link>🙎🏻‍♂️ Profile (soon)</Link>
                        </li>
                        <li>
                            <Link>🧢 Top Attempts (soon)</Link>
                        </li>
                        <li>
                            <Link>🎓 Leaderboard (soon)</Link>
                        </li>
                    
                    </ul>
                </section>
            </section>
        )
    
}