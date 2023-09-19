import { useFormik } from "formik"
import * as Yup from "yup"

import { useGameContext } from "../contexts/Game"
import { useUserContext } from "../contexts/User"
import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

function Message(props){

    if (props.text)
        return(
            <div className="top-message-box">
                <div>💡</div> <div>{props.text}</div>
            </div>
        )
}

export default function StartGamePage(){
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams();

    const [textMessage, setTextMessage] = useState("")

    const { updateGame } = useGameContext()

    const { userData, resetAttempts } = useUserContext()

    useEffect(() => {
        if ( !searchParams.get("topic") || !userData.player )
            navigate("/")
    },[])



    const formik = useFormik({
        initialValues : {
            initNumber : "",
            finalNumber : ""
        },

        validationSchema : Yup.object({
            initNumber : Yup.number().typeError("Please enter a valid number")
                            .required("Min Number is Required!"),
            finalNumber : Yup.number().typeError("Please enter a valid number")
                            .required("Max Number is Required!")
        }),

        onSubmit : values => {
            const iN = parseInt(values.initNumber)
            const fN = parseInt(values.finalNumber)
            if ( fN <= iN){
                setTextMessage("init number must be lower than final number!")
            } else if ( (fN - iN) <= 10 && (fN - iN) >= 0 ){
                setTextMessage("The difference beetween init number and final number must be greater than 10")
            } else {
                updateGame({
                    topic : searchParams.get("topic"),
                    msg : "",
                    minNumber : iN,
                    maxNumber : fN,
                    isStart : true,
                    isWin : false
                })
                resetAttempts()
                if (searchParams.get("topic") == "linear")
                    navigate("/linear-game")
                else if (searchParams.get("topic") == "binary")
                    navigate("/binary-game")
                else
                    navigate("/")
                

            }
        }
    })

    return (
        <>  
            <section className="container">
                <Message text={textMessage}></Message>
                <h1>set your interval numbers</h1>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-input-group">
                        <label htmlFor="initNumber">from</label>
                        <input type="text" 
                                name="initNumber"
                                id="initNumber" 
                                value={formik.values.initNumber}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                autoFocus />
                    </div>
                    <div className="form-input-group">
                        <label htmlFor="finalNumber">to</label>
                        <input type="text" 
                                name="finalNumber" 
                                id="finalNumber"
                                value={formik.values.finalNumber}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                 />
                    </div>
                    <small style={{color : "red"}}> 
                    {   (formik.errors.initNumber && formik.touched.initNumber) || 
                        (formik.errors.finalNumber && formik.touched.finalNumber) ? 
                        ( `${formik.errors.initNumber ? formik.errors.initNumber : ""} ${formik.errors.finalNumber ? formik.errors.finalNumber : ""}`) 
                        : 
                        <br />}
                    </small>
                    <input type="submit" value="play" />
                </form>
            </section>
        </>
    )
}