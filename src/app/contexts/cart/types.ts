import { Product } from "@/app/types";



export interface CartState {
    cartItems: Product[];
}

export enum CartActionTypes {
    ADD_ITEM = 'ADD_ITEM',
    REMOVE_ITEM = 'REMOVE_ITEM',
    CLEAR_CART = 'CLEAR_CART',
}

export interface AddItemAction {
    type: CartActionTypes.ADD_ITEM;
    payload: { product: Product, quantity: number };
}

export interface RemoveItemAction {
    type: CartActionTypes.REMOVE_ITEM;
    payload: { id: number };
}

export interface ClearCartAction {
    type: CartActionTypes.CLEAR_CART;
}

export type CartAction = AddItemAction | RemoveItemAction | ClearCartAction;
