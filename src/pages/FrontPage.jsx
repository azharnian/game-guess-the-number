import { Link } from "react-router-dom"
export default function FrontPage(){

    return (
        <>
            <h1>Guess The Number</h1>
                    
            <div className="games">
                <Link to={"/start"}><div className="linear">linear</div></Link>
                <Link to={"/start"}><div className="binary">binary</div></Link>
            </div>
        </>
    )
}