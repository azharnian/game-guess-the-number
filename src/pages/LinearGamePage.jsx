import { useGameContext } from "../contexts/Game";
import WinPage from "./WinPage";
import GamePage from "./GamePage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function LinearGamePage(){
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
                <GamePage />
        ) 
    }
}