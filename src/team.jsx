import { useState } from "react"

export default function Team(){

    const [team,setTeam] = useState(11)

    function handleAddPlayer(){
        const newPlayer  = team + 1;
        setTeam(newPlayer);
    }

    function handleRemovePlayer(){
    // With Arrow Function 
        setTeam(prevState => prevState -1)
    }

    const teamStyle ={
        border:'2px solid blue',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px',
    }

    return (
        <div style={teamStyle}>
            <h3>Player: {team}</h3>
            <button onClick={handleAddPlayer}>Add Player</button>
            <button onClick={handleRemovePlayer}>Remove Player</button>
        </div>
    )
}