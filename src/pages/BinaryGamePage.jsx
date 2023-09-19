import { useGameContext } from "../contexts/Game";
import WinPage from "./WinPage";
import GamePage from "./GamePage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Message(props){

    if (props.text)
        return(
            <div className="top-message-box">
                <div>💡</div> <div>{props.text}</div>
            </div>
        )
}

export default function BinaryGamePage(){
    const navigate = useNavigate()
    const { gameData } = useGameContext()
    
    useEffect(() => {
        if (!gameData.isStart)
        navigate("/")
    },[])

    if (gameData.isWin) {
        return (
                <WinPage />
        )
    } else if( gameData.isStart) {
        return (
            <>
                { (gameData.msg) ?
                    <Message text={gameData.msg}></Message> : ""
                }
                <GamePage />
            </>
                
        ) 
    }
}