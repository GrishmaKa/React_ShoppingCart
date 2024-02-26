import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";

export default function Cart() {
    const { items, updateItemQuantity } = useContext(CartContext);

    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;
    return (
        <div id="cart">
            {items.length === 0 && <p>No items in the cart!</p>}
            {items.length > 0 && (
                <ul id="cart-items">
                    {items.map((items) => {
                        const formattedPrice = `$${items.price.toFixed(2)}`;
                        return (
                            <li key={items.id}>
                                <div>
                                    <span><h3>{items.name}</h3></span>
                                    <span><p>Price: ({formattedPrice})</p></span>
                                    Lecture thumbnail
                                    
                                </div>
                                <div className="cart-item-actions">
                                    <button onClick={() => updateItemQuantity(items.id, -1)}>-</button>
                                    <span>{items.quantity}</span>
                                    <button onClick={() => updateItemQuantity(items.id, 1)}>+</button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
            <p id="cart-total-price">
                Cart Total : <strong>{formattedTotalPrice}</strong>
            </p>
        </div>
    );
}