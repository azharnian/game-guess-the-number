import { createContext, useContext, useState } from "react";

export const GameContext = createContext(null);

export const useGameContext = () => {
    return useContext(GameContext)
}

export function GameProvider({children}) {
    const [gameData, setGameData] = useState({
        msg : "",
        topic : "",
        minNumber : null,
        maxNumber : null,
        ranNumber : null,
        isStart : false,
        isWin : false
    })

    const updateGame = data => {
        setGameData({
            ...gameData,
            msg : data.msg,
            minNumber : data.minNumber,
            maxNumber : data.maxNumber,
            ranNumber : Math.floor(Math.random() * (data.maxNumber - data.minNumber + 1) + data.minNumber),
            isStart : data.isStart,
            isWin : data.isWin
        })
    }

    const updateMsg = data => {
        const gameUpdate = { ...gameData, msg : data}
        setGameData(gameUpdate)
    }

    const updateTopic = data => {
        const gameUpdate = { ...gameData, topic : data}
        setGameData(gameUpdate)
    }

    const updateMinNumber = data => {
        const gameUpdate = { ...gameData, minNumber : data}
        setGameData(gameUpdate)
    }

    const updateMaxNumber = data => {
        const gameUpdate = { ...gameData, maxNumber : data}
        setGameData(gameUpdate)
    }

    const updateRanNumber = () => {
        const gameUpdate = { ...gameData, 
            ranNumber : Math.floor(Math.random() * (gameData.maxNumber - gameData.minNumber + 1) + gameData.minNumber)
        }
        setGameData(gameUpdate)
    }

    const updateIsStart = data => {
        setGameData({
            ...gameData,
            isStart : data
        }) 
    }
    const updateIsWin = data => {
        setGameData({
            ...gameData,
            isWin : data
        })
    }

    const values = {
        gameData,
        updateGame,
        updateMsg,
        updateMinNumber,
        updateMaxNumber,
        updateRanNumber,
        updateIsWin,
        updateIsStart
    }

    return (
        <GameContext.Provider value={values}>{children}</GameContext.Provider>
    );
}