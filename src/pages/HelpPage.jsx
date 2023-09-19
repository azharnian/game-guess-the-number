import { Link } from "react-router-dom"

export default function HelpPage(){

    return (
        <section className="container">
        <h1>How can I help you ?</h1>
        <section className="sub-container">
            <ul>
                <li>
                    <Link to={"/howto"}>🛝 How To Play</Link>
                </li>
                <li>
                    <Link to={"/about"}>❓ About Game</Link>
                </li>
                
            </ul>
        </section>
        </section>
    )
}
