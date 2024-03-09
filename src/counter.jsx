import { useState } from "react"



export default function Counter(){

    const [counter,setCounter] = useState(1)

    function handleClick(){
        if(counter > -1){
            const newCounter = counter + 1;
            setCounter(newCounter)
        }
    }
    
    function handleReduce(){
       if(counter > 0 ){
        const newCounter = counter - 1;
        setCounter(newCounter);
       }
    }

    return (
        <div>
            <h3>Counter: {counter}</h3>
            <button onClick={handleClick}>Add Number</button>
            <button onClick={handleReduce}>Reduce Number</button>
        </div>
    )
}