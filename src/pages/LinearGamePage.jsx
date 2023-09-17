
export default function LinearGamePage(){

    return (
        <>
            <h2 className="stopwatch"><span className="minute">0</span> : <span className="second">0</span> </h2>

            <h2 className="attempt-box"><span className="attempt-text">0</span> Times</h2>
            <h1>What is the number ?</h1>
            <p></p>
            <form action="">
                <input type="text" name="guessedNumber" id="" />
                <input type="submit" value="guess" />
            </form>
        </>
    )
}