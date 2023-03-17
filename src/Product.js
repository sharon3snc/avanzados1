
import {data} from "./data"

const ProductList = ({allProducts, setAllProducts, total, setTotal}) => {
    const onAddProduct =(product) => {

        if(allProducts.find((item)=> item.id === product.id)) {
            const products = allProducts.map(item=> 
                item.id === product.id 
                ? {...item, quantity: item.quantity+1}
                : item
            );

            setTotal(total+product.price*product.quantity);
            return setAllProducts([...products]);
        }
        setTotal(total+product.price*product.quantity);
        setAllProducts([...allProducts, product]);
    };

    return (
        <div>
            {data.map((product) => (
                <div key={product.id}>
                    <h3 className='productName'> {product.name} </h3>
                    <p className='productPrice'> {product.price}€</p>
                    <button onClick={() => onAddProduct(product)}>Add to cart</button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
