
export default function StartGamePage(){

    return (
        <>
            <h1>set your interval numbers</h1>
            <form action="">
                <div className="form-input-group">
                    <label htmlFor="init_number">from</label>
                    <input type="text" name="init_number" id="" autoFocus />
                </div>
                <div className="form-input-group">
                    <label htmlFor="init_number">to</label>
                    <input type="text" name="final_number" id="" />
                </div>

                <input type="submit" value="play" />
            </form>
        </>
    )
}