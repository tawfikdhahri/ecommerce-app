import { Product } from "@/app/types";
import { CartState, CartAction, CartActionTypes } from "./types";

export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      const itemIndex = state.cartItems.findIndex(
        (item: Product) => item.id === action.payload.product.id
      );

      return {
        ...state,
        cartItems:
          itemIndex >= 0
            ? [
                ...state.cartItems.slice(0, itemIndex),
                {
                  ...state?.cartItems[itemIndex],
                  quantity:
                    (state?.cartItems[itemIndex]?.quantity ?? 0) +
                    action.payload.quantity,
                },
                ...state.cartItems.slice(itemIndex + 1),
              ]
            : [
                ...state.cartItems,
                {
                  ...action.payload.product,
                  quantity: action.payload.quantity,
                },
              ],
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
