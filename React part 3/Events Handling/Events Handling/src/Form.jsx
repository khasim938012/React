import { useState } from "react";

export default function Form(){
    let [fullname, setFullName]=useState("Khasim");

    let handleNameChange=(event) =>{
        setFullName(event.target.value)
    };
    return (
        <form>
            <label htmlFor="username">Full Name</label>
            <input placeholder="enter " 
            type="text" 
            value={fullname} 
            onChange={handleNameChange}
            id="username"/>
            <button>submit</button>
        </form>
    );
}