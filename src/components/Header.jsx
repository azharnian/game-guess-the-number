import { Link, Outlet } from "react-router-dom"

export default function Header(){

    return (
        <header>
            <div className="bar"></div>
            <div className="profile">
                <Link to={"/profile"}>
                    <span>
                        👨🏻‍💻
                    </span>
                </Link>
            </div>
            <Outlet />
        </header>
    )
}