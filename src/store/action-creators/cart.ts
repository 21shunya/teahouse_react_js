import { CartActionsTypes } from '../../types/cart';

export const addCartAction = (payload: number) => ({ type: CartActionsTypes.ADD_TO_CART, payload });
export const removeCartAction = (payload: number) => ({
  type: CartActionsTypes.REMOVE_FROM_CART,
  payload,
});
