import { Link, Outlet } from "react-router-dom"

export default function Footer(){

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
            <Outlet />
        </footer>
    )
}