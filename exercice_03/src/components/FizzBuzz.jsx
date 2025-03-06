import { useEffect, useState } from "react";

const FizzBuzz = () => {
    const [number, setNumber] = useState(0);
    const [message, setMessage] = useState("");



    const incrementButton = ()=>{
        setNumber(previousNumber => previousNumber+1)
    }

    const decrementButton = ()=>{
        setNumber(previousNumber =>previousNumber-1)
    }

    useEffect(()=>{
        if(number%5==0 && number%3==0){
            setMessage("FIZZ-BUZZ")
        }else if(number%5==0){
            setMessage("BUZZ")
        }else if(number%3==0){
            setMessage("FIZZ")
        }else{
            setMessage("...")
        }
    })


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