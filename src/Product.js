import { useState } from "react";

function Product () {
    const [count,setCount] = useState(0);

    const props= [
        {name: 'helado', price:6},
        {name: 'palomitas', price:3},
        {name: 'coca cola', price:1},
    ]

    const handleIncrease =() => {
        setCount(count+1);
    };

    const handleDecrease= () => {
        if (count>0) {
            setCount(count-1);
        }
    };

    const totalPrice= props.price* count;

    return (
        <div>
            <h3>{props.name}</h3>
            <p>Unit price: ${props.price}</p>
            <button OnClick={handleIncrease}>-</button>
            <span>{count}</span>
            <button OnClick={handleDecrease}>+</button>
            <p>Total price: ${totalPrice}</p>
        </div>
    );
}

export default Product
