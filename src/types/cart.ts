export interface CartState {
  totalCount: number;
  idList: Array<number>;
}
export enum CartActionsTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

interface AddToCArtAction {
  type: CartActionsTypes.ADD_TO_CART;
  payload: number;
}

interface RemoveFromCArtAction {
  type: CartActionsTypes.REMOVE_FROM_CART;
  payload: number;
}

export type CartAction = AddToCArtAction | RemoveFromCArtAction;
