import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = ()=>{

    const state = useState();
    const [count,setCount] = useState(0);
    const IncNum = () =>{
        setCount(count+1);
        console.log('clicked');
    };
    
return(
   <>
   <div> 
   <h1>{count}</h1>
    <button onClick={IncNum}>Click Here</button>
    </div>
</>
);
};

export default App ;