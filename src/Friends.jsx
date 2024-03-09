import { useState } from 'react'
import { useEffect } from 'react'
import './friends.css'
import Friend from './Friend'



export default function  Friends(){

    const [friends, setFriends]  = useState ([])

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data => setFriends(data))
    },[])

    return (
        <div className='box'>
            <h4>Friends : {friends.length} </h4>
            {
                friends.map(friend=> <Friend friend={friend}></Friend>)
            }
        </div>
    )
}



// 1. Hold Data
// 2. Use Effect With Dependency Array
// 3. Use Fetch To Load Data
// 4. Set Loaded Data To The State


