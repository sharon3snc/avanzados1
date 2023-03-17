import React, { useState } from "react";

const Cart = ({allProducts, setAllProducts, total, setTotal}) => {

    const onDeleteProduct=(product) => {
        const results= allProducts.filter(item => item.id !== product.id);
        
        setTotal(total-product.price*product.quantity);
        setAllProducts(results);
    };

    const [discountCode, setDiscountCode] = useState("");
    const [discount, setDiscount]= useState(0);

    const handleDiscount= (code) => {
        if (discountCode==='SAVE10') {
            setDiscount(0.1);
        } else {
            alert('Código inválido');
        }
    };

    const totalPrice= allProducts.reduce((acc,p)=> acc + p.price*p.quantity, 0);
    const totalDiscount= totalPrice * discount;
    const totalAfterDiscount = totalPrice - totalDiscount;


    return(
        <div>
            <h2>Shopping Cart</h2>
            <div>
                {allProducts.map(product=> (
                    <div key= {product.id}>
                        <span>
                            {product.quantity} -
                        </span>
                        <span>
                            {product.name} -
                        </span>
                        <span>
                            {product.price}€
                        </span>
                        <button onClick={()=> onDeleteProduct(product)}>
                        Delete
                        </button>
                    </div>
                    
                ))}
            </div>

            <p>Total: {total}€</p>
            <input type="text" value={discountCode} onChange={(e)=> setDiscountCode(e.target.value)}
            placeholder= "Enter discount code"/>
            <button onClick={() => handleDiscount('SAVE10')}> Redeem Discount</button>
            <p>Total price after Discount: ${totalAfterDiscount}</p>
            
        </div>
    )
}

export default Cart
