import { Link } from "react-router-dom"

import { useUserContext } from "../contexts/User"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Header(){

    const navigate = useNavigate()

    const {userData} = useUserContext()

    useEffect(() => {
        if (!userData.player)
            navigate("/")
    },[])

    if (userData.player)
        return (
            <header>
                <div className="bar">
                    <span> { `Hi ${userData.player}!`}</span>
                </div>
                <div className="profile">
                    <Link to={"/profile"}>
                        <span>
                            👨🏻‍💻
                        </span>
                    </Link>
                </div>
            </header>
        )
}