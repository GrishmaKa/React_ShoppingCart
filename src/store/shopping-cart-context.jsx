import { createContext, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

export const CartContext = createContext({
    items: [],
    addItemToCart: () => { },
    updateItemQuantity: () => { },
});

function cartReducer(state, action) {
    if (action.type === 'ADD-ITEM') {
        const updatedItems = [...state.items];

        const exisingCartItemIndex = updatedItems.findIndex((cartItem) => cartItem.id === action.payload);

        const exisingCartItem = updatedItems[exisingCartItemIndex];

        if (exisingCartItem) {
            const updatedItems = {
                ...exisingCartItem,
                quantity: exisingCartItem.quantity + 1,
            };

            updatedItems[exisingCartItemIndex] = updatedItems;
        } else {
            const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
            updatedItems.push({
                id: action.payload,
                name: product.title,
                price: product.price,
                quantity: 1,
            });
        }
        return {
            ...state,
            items: updatedItems,
        };

    }
    if (action.type === 'UPDATE-QUANTITY') {

        const updatedItems = [...state.items];
        const updatedItemsIndex = updatedItems.findIndex(
            item => item.id === action.payload.productId);
        const updatedItem = { ...updatedItems[updatedItemsIndex] };

        updatedItem.quantity += action.payload.amount;

        if (updatedItem.quantity <= 0) {
            updatedItems.splice(updatedItemsIndex, 1);
        } else {
            updatedItems[updatedItemsIndex] = updatedItem;
        }

        return {
            ...state,
            items: updatedItems,
        };
    }

    return state;
}

export default function CartContextProvider({ children }) {
    const [shoppingCartState, shoppingCartDispatch] = useReducer(cartReducer, { items: [] });

    function handleAddItemToCart(id) {
        shoppingCartDispatch({
            type: 'ADD-ITEM',
            payload: id
        });
    }

    function handleUpdateCartItemsQuantity(productId, amount) {
        shoppingCartDispatch({
            type: 'UPDATE-QUANTITY',
            payload: {
                productId,
                amount
            }
        })
    }

    const ctxValue = {
        items: shoppingCartState.items,
        addItemToCart: handleAddItemToCart,
        updateItemQuantity: handleUpdateCartItemsQuantity,
    };
    return (
        <CartContext.Provider value={ctxValue}> {children} </CartContext.Provider>
    );
}