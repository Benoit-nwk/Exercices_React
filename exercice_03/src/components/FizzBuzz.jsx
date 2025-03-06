import { useState } from "react";

const FizzBuzz = () => {
    const [number, setNumber] = useState(0);

    const incrementButton = ()=>{
        setNumber(number+1)
    }

    const decrementButton = ()=>{
        setNumber(number-1)
    }

const render = () => {

    if(number%5==0 && number%3==0){
        return "fizzbuzz"
    }else if(number%5==0){
        return "buzz"
    }else if(number%3==0){
        return "fizz"
    }else{
        return "..."
    }

}

        


    return ( 
        <> 
        <button onClick={decrementButton} disabled={number <=0}>-</button>
        <span>{number}</span>
        <button onClick={incrementButton} disabled={number>=50}>+</button>
        <p>{render()}</p>
        </>
     );
}
 
export default FizzBuzz;