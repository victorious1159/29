import { useState } from "react";

function Counter1(){
    const [count , setCount] = useState(0);

    function increment(){
        setCount( count + 1);
    }
    function decrease(){
        setCount( count - 1);
    }

    return(
        <div>
            <p>
                Count : {count}
            </p>
            <button onClick={increment}></button>
            <button onClick={decrease}></button>
        </div>
    )
}
export default Counter1;