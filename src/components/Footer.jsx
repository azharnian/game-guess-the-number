import { Link, Outlet } from "react-router-dom"
import { useUserContext } from "../contexts/User"

export default function Footer(){

    const { userData } = useUserContext()

    if (userData.player){
        return (
        <footer>
        <Link to={"/"}>
            <span className="footer-item">
                🛖
            </span>
        </Link>
        <Link to={"/topics"}>
            <span className="footer-item">
                📖
            </span>
        </Link>
        <Link to={"/profile"}>
            <span className="footer-item">
                👨🏻‍💻
            </span>
        </Link>
        </footer>)
    }
    return (
       <></> 
    )
}