import { useState } from "react";
import Product from "./Product.js";

function Cart () {
    const [products, setProducts]= useState([]);
    const [discount, setDiscount]= useState(0);

    const handleAddProduct= (product) => {
        const newProducts= [...products];
        const existingProductIndex= newProducts.findIndex((p)=> p.name === product.name);

        if (existingProductIndex>=0) {
            newProducts[existingProductIndex].count++;
        } else {
            newProducts.push({...product, count:1});
        }

        setProducts(newProducts);
    };

    const handleRemoveProduct= (product) => {
        const newProducts= [...products];
        const existingProductIndex= newProducts.findIndex((p)=> p.name === product.name);

        if (existingProductIndex>=0) {
            if (newProducts[existingProductIndex].count ===1) {
                newProducts.splice(existingProductIndex,1);
            } else {
                newProducts[existingProductIndex].count--;
            }
        }

        setProducts(newProducts);
    };

    const handleDiscount= (code) => {
        if (code==='SAVE10') {
            setDiscount(0.1);
        } else {
            alert('Código inválido');
        }
    };

    const totalPrice= products.reduce((acc,p)=> acc + p.price*p.count, 0);
    const totalDiscount= totalPrice * discount;
    const totalAfterDiscount = totalPrice - totalDiscount;

    return(
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {products.map((product)=> (
                    <li key= {product.name}>
                        <Product name={product.name} price={product.price} count={product.count}/>
                        <button onClick={()=> handleRemoveProduct(product)}>Remove </button>
                        <button onClick={()=> handleAddProduct(product)}>Add</button>
                    </li>
                ))}
            </ul>

            <p>Total Price: ${totalPrice}</p>
            <button onClick={() => handleDiscount('SAVE10')}> Redeem Discount</button>
            <p>Total price after Discount: ${totalAfterDiscount}</p>
        </div>
    )
}

export default Cart
