import { Link, useNavigate } from "react-router-dom"
import { useUserContext } from "../contexts/User"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useEffect } from "react";

function IntroPage(){

    const { updatePlayer } = useUserContext();
    
    const formik = useFormik({
        initialValues : {
            player : ""
        },

        validationSchema : Yup.object({
            player : Yup.string()
                        .required()
                        .min(3)
                        .max(8)
        }),

        onSubmit : values => {
            updatePlayer(values.player)
            localStorage.setItem("userData", JSON.stringify({
                player : values.player,
                bestAttempts : 0
            }))
        }
    })

    return (
        <section className="container">
        <h1>What is your name ?</h1>
        <form onSubmit={formik.handleSubmit}>

            <input type="text" 
                    name="player" 
                    id="player"
                    value={formik.values.player}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoFocus />
            <input type="submit" value="Go" />   

        </form>
        </section>
    )
}

function CoverPage(){

    return(
        <section className="container">
            <h1>Guess The Number</h1>
                    
            <div className="games">
                <Link to={"/start?topic=linear"}><div className="linear">linear</div></Link>
                <Link to={"/start?topic=binary"}><div className="binary">binary</div></Link>
            </div>
 
            <div className="help-btn">
            <Link to={"/help"}>
                <span>🙋🏻</span>
            </Link>
            </div>
        </section>
    )

}

export default function FrontPage(){
    const { userData, updatePlayer } = useUserContext();

    useEffect(() => {
        const userDataLocal = JSON.parse(localStorage.getItem("userData"))
        if (userDataLocal)
            updatePlayer(userDataLocal.player)
    },[])
    
    if (!userData.player) 
        return (
            <IntroPage />
        )
    return (
        <CoverPage />
    )
}