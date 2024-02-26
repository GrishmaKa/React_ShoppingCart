import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";


export default function Products({ id, price, title, image, description }) {
    const { addItemToCart } = useContext(CartContext);
    return (
        <artical className="product">
            <img src={image} alt={title}></img>
            <div className="product-content">
                <div>
                    <h3>{title}</h3>
                    <p className="product-price"><b>Price:</b> ${price}.00</p>
                    <p>{description}</p>
                </div>
                <p className="product-actions">
                    <button onClick={() => addItemToCart(id)}>Add to Cart</button>
                </p>
            </div>
        </artical>
    );
}