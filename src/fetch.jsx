import { useEffect } from "react";
import { useState } from "react"

export default function Fetch(){

    const [user,setUser] = useState([]);


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data));
    },[]);

    // console.log(user.map(u => u.name ));  
    const firstName = user.length > 0 ? user[0].name : "No user"; 
    const email = user.length > 0 ? user[0].email : "No user"; 
    // const firstName = user[0].name ;

    return (
        <div>
           <div style={{
            border :'2px solid blue',
            borderRadius : '10px'
           }}>
                <h3>Total Length: {user.length}</h3>
                <h3>Name : {firstName}</h3>
                <h3>Name : {email}</h3>
           </div>
        <div style={{
            border: '2px solid blue',
            marginTop : '5px',
            borderRadius : '10px'
        }}>
        {user.map(p => (
            <div key={p.id}>
            <h3>Name: {p.name}</h3>
            <p>UserName: {p.username}</p>
            </div>
        ))}
        </div>
    </div>
    )
}