export default function Friend({friend}){
    const {name,email,address : {street,  geo : {lng} }} = friend;
    return (
        <div>
            <h4>Friend Name:{name}</h4>
            <h4>Email:{email}</h4>
            <h4>Street:{street}</h4>
            <h4>Street: {lng}</h4>
        </div>
    )
}