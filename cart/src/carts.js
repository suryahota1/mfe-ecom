import { BehaviorSubject } from "rxjs";
import { getCartItemsForUser, addItemToCart, clearCart } from "server/carts";

export const jwt = new BehaviorSubject();
export const cart = new BehaviorSubject();
export const userId = new BehaviorSubject();

export function getCart ( userId ) {
    const val = getCartItemsForUser(userId);
    cart.next(val);
}

export function addToCart ( productId ) {
    addItemToCart(userId.value, productId);
    const val = getCartItemsForUser(userId.value);
    cart.next(val);
}

export function clearMyCart () {
    clearCart(userId.value);
    const val = getCartItemsForUser(userId.value);
    cart.next(val);
}