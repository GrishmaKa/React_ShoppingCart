import { useContext, useRef } from "react";

import CartModal from "./CartModal";
import { CartContext } from "../store/shopping-cart-context";

export default function Header() {
    const modal = useRef();

    const { items } = useContext(CartContext);
    const cartQuantity = items.length;

    function handleOpenCart() {
        modal.current.open();
    }
    let modalAction = <button>Close</button>;

    if (cartQuantity > 0) {
        modalAction = (
            <>
                <button>Close</button>
                <button>Checkout</button>
            </>
        );
    }
    return (
        <>
            <CartModal
                ref={modal}
                title="Your Cart"
                action={modalAction} />

            <header id="main-header">
                <div id="main-title">
                    <img src="logo.png" />
                    <h1>Elegant Context</h1>
                </div>
                <p>
                    <button onClick={handleOpenCart}>Cart ({cartQuantity})</button>
                </p>
            </header>
        </>

    );
}