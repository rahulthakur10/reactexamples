import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = ()=> {

    const [name,setName] = useState("");
    const [fullName,setFullName] = useState();
    const inputEvent = (event)=>{
    //console.log(event.target.value);
    setName(event.target.value);    
};

const onSubmit = (event)=>{
    event.preventDefault();
    setFullName(name);
};
    return(
   <>
   
 <div>
 <form onSubmit={onSubmit}> 
   <h1>Hello {fullName}</h1>
    <input type="text" placeholder="Enter Your name"
    onChange={inputEvent} value={name}/>
    <br/>
    <button type ="submit">Click Here</button>
    </form>
    </div>
    
</>
);
};

export default App ;