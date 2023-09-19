import { useUserContext } from "../contexts/User"

export default function WinPage(){
    const { userData} = useUserContext()


    return(
        <section className="container">
            <h1>You Win</h1>

            <h2>Attempts : {userData.attempts} ⛳️</h2>
        </section>
    )
}