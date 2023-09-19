import { Link } from "react-router-dom"

export default function HowToPlayPage(){

    return (
        <section className="container">
        <h1>How To Play The Game ?</h1>
        <section className="sub-container">
            <p>Objective : The player's goal is to guess the randomly generated number within a certain range.</p>

            <p>In the linear search version, the computer will not provide hints about whether the guessed number is higher or lower than the target number, helping the player narrow down their guess with each attempt.</p>

            <ol>
                <li>
                    Setting Up the Game. Decide on a range for the random number. For example, you can choose a range from init number to final number.
                </li>
                <li>
                    Computer will generate a random number within the chosen range and store it as the target number.
                </li>
                <li>
                    Ask the player to enter their first guess
                </li>
                <li>
                    Compare the player's guess to the target number.
                    <ul>
                        <li>
                        If the guess is correct, display a victory message and the number of attempts it took to win.
                        </li>
                        <li>
                        If the guess is too high, inform the player and ask them to guess again, incrementing the attempt counter.
                        </li>
                        <li>
                        If the guess is too low, inform the player and ask them to guess again, incrementing the attempt counter.
                        </li>
                    </ul>
                    
                </li>
                <li>
                    Repeat the steps until the player guesses the correct number.
                </li>
            </ol>

            <p>
                In the binary search version, the player will use a more strategic approach to guess the number by dividing the search range in half with each guess (in their own mind 😂).
            </p>
            <ol>
                <li>
                Generate a random number within the chosen range and store it as the target number. Initialize variables for the lower and upper bounds of the search range.
                </li>
                <li>
                Ask the player to guess the number.
                </li>
                <li>
                Compare the player's guess to the target number:
                <ul>
                    <li>
                    If the guess is correct, display a win message and the number of attempts it took to win.
                    </li>
                    <li>
                    If the guess is too high, update the upper bound (high) to be one less than the guess.
                    </li>
                    <li>
                    If the guess is too low, update the lower bound (low) to be one more than the guess.
                    </li>
                </ul>
                </li>
                <li>
                Repeat the steps until the player guesses the correct number.
                </li>
            </ol>

            <p>When you guess the correct number, the game will display a win message along with the number of attempts it took to win.</p>

            <Link to={"/"} className="btn-play">Play Now</Link>
        </section>
        </section>
    )
}