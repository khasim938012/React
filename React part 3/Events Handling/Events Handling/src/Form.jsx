import { useState } from "react";

export default function Form(){
    let [fullname, setFullName]=useState("Khasim");

    let handleNameChange=(event) =>{
        setFullName(event.target.value)
    };
    return (
        <form>
            <input placeholder="enter " type="text" value={fullname} onChange={handleNameChange}/>
            <button>submit</button>
        </form>
    );
}