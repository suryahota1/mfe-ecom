import { getAllProducts } from "./products";

const cartMap = new Map();
const products = getAllProducts();

function getInitialCartItems ( items ) {
    return products.filter(product => items.includes(product.id)).map(item => ({...item, quantity: 1}));
}

cartMap.set(1, getInitialCartItems([1, 5, 7]));
cartMap.set(2, getInitialCartItems([2, 3, 6]));

export function getCartItemsForUser ( userId ) {
    console.log("getCartItemsForUser userId", userId, cartMap);
    return cartMap.get(userId);
}

export function addItemToCart ( userId, productId ) {
    console.log("addItemToCart", userId, productId);
    let cartItems = cartMap.get(userId);
    const nextItem = products.find(product => product.id === productId);
    console.log("addItemToCart nextItem", nextItem);
    if ( nextItem ) {
        let doesExist;
        for ( let i = 0; i < cartItems.length; i++ ) {
            if ( cartItems[i].id === productId ) {
                doesExist = true;
                cartItems[i] = {...cartItems[i], quantity: cartItems[i].quantity + 1};
            }
        }
        console.log("addItemToCart doesExist", doesExist);
        if ( !doesExist ) {
            nextItem.quantity = 1;
            cartItems = [ ...cartItems, nextItem ];
        }
        cartMap.set(userId, cartItems);
    }
    return cartItems;
}

export function removeItemFromCart ( userId, productId ) {
    let cartItems = cartMap.get(userId);
    currItem = cartItems.find(item => item.id === productId);
    if ( currItem ) {
        currItem.quantity -= 1;
        cartMap.set(userId, cartItems);
    }
    return cartItems;
}

export function clearCart ( userId ) {
    cartMap.set(userId, [])
    return [];
}
