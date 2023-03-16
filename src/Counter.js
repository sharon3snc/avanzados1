import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);


    const handleCount = () => {
        setCount(count + 1);

        if (count === 2) {
            throw new Error('marcador igual a 3');
        }
        
    };

    return (
        <div>
            <p> Contador: {count} </p>
            <button onClick={handleCount}> Aumentar contador</button>
        </div>       
    );
};

export default Counter;
