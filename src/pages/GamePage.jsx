import { useState, useEffect } from "react";
import { useUserContext } from "../contexts/User";
import { useGameContext } from "../contexts/Game";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function GamePage(){

    const { userData, updateAttempts, updateBestAttempts } = useUserContext();
    const { gameData, updateIsWin, updateMsg } = useGameContext();

    useEffect(() => {
        console.log(gameData.msg)
    },[gameData])

    const formik = useFormik({
        initialValues : {
            answer : ""
        },

        validationSchema : Yup.object({
            answer : Yup.number().typeError('Please enter a valid number')
                        .required("Your Answer is Required!")
                        .min(gameData.minNumber)
                        .max(gameData.maxNumber)
        }),

        onSubmit : values => {
            const ans = parseInt(values.answer)
            updateAttempts()
            console.log(gameData.ranNumber)
            if (gameData.ranNumber > ans)
                updateMsg(`Greater than ${ans}`)
            else if (gameData.ranNumber < ans)
                updateMsg(`Less than ${ans}`)
            else if (gameData.ranNumber === ans){
                console.log("You Win!")
                updateIsWin(true)       
            }  
            values.answer = ""
        }
    })

    return(
        <section className="container">
            {/* <h2 className="stopwatch"><span className="minute">0</span> : <span className="second">0</span> </h2> */}

            <h2 className="attempt-box"><span className="attempt-text">{userData.attempts}</span> ⛳️</h2>
            <h1>What is the number ?</h1>
            <p></p>
            <form onSubmit={formik.handleSubmit}>
                <input type="text" 
                       name="answer" 
                       value={formik.values.answer}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       autoFocus
                       id="answer" />

                <small style={{color : "red"}}> 
                    {(formik.errors.answer && formik.touched.answer) ? formik.errors.answer : <br />}
                </small>
                <input type="submit"
                       value="guess" />

                
            </form>
        </section>
    )
}