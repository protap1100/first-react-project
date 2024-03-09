import { useState } from "react"


export default function Practice(){

    const [team,addNumber]  = useState(0)
    
    function handleAdd(){
        const newNumber = team + 1;
        addNumber(newNumber)
    }

    function handleRemove(){
        const oldNumber = team - 1;
        addNumber(oldNumber);
    }

    return (
        <div>
            <h3>Practicing : {team} </h3>
            <button onClick={handleAdd} >Add Number</button>
            <button onClick={handleRemove} >Add Number</button>
        </div>
    )
    
}