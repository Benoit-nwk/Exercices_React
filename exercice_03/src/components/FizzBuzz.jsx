import { useState } from "react";

const FizzBuzz = () => {
    const [number, setNumber] = useState(0);
    const [message, setMessage] = useState("FizzBuzz");


    const incrementButton = ()=>{
        setNumber(previousNumber => previousNumber+1)
        setFizzBuzzMessage()
    }

    const decrementButton = ()=>{
        setNumber(previousNumber =>previousNumber-1)
        setFizzBuzzMessage()
    }

    const setFizzBuzzMessage = () => {
    }


    return ( 
        <> 
        <button onClick={decrementButton}>-</button>
        <span>{number}</span>
        <button onClick={incrementButton}>+</button>
        <p>{message}</p>
        </>
     );
}
 
export default FizzBuzz;