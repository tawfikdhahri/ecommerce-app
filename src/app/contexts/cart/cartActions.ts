import { Product } from "@/app/types";
import { CartActionTypes, CartAction } from "./types";

export const addItem = (payload: {
  product: Product;
  quantity: number;
}): CartAction => ({
  type: CartActionTypes.ADD_ITEM,
  payload,
});

export const removeItem = (id: number): CartAction => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: { id },
});

export const clearCart = (): CartAction => ({
  type: CartActionTypes.CLEAR_CART,
});
