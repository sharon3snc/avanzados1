import { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);


    useEffect(() => {
        if (count === 3) {
        throw new Error("Counter reached 3");
        }
        }, [count]);

    return (
        <div>
            <p> Contador: {count} </p>
            <button onClick={()=> setCount(count+1)}> Aumentar contador</button>
        </div>       
    );
};

export default Counter;
