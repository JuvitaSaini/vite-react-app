import {useState} from "react"
const Counter=()=>{
    const [counter,setCounter]=useState(0);
    return (
        <>
         <button class="decrement-btn" onClick={()=>setCounter(prev=>prev-1)}>-</button><span>{counter} </span><button class="increment-btn" onClick={()=>setCounter(prev=>prev+1)}>+</button>

        </>
    )
}

export default Counter;