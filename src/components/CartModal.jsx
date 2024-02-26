import { forwardRef, useImperativeHandle, useRef} from "react";
import { createPortal } from "react-dom";
import Cart from './Cart';


const CartModal = forwardRef(function CartModal(
    { title, action }, ref) {
    const dialog = useRef();
   
    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialog.current.showModal();
            },
        };
    });

    return createPortal(
        <dialog id="modal" ref={dialog}>
            <h2>{title}</h2>
            <Cart />
            <form method="dialog" id="modal-action">
                {action}
            </form>
        </dialog>, document.getElementById('modal-root') || document.body
    );
});

export default CartModal;