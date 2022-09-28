import { CartAction, CartActionsTypes, CartState } from '../../types/cart';

const initialState: CartState = {
  totalCount: 0,
  idList: [],
};

export const cartReducer = (state = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case CartActionsTypes.ADD_TO_CART:
      return {
        ...state,
        idList: [...state.idList, action.payload],
        totalCount: state.totalCount + 1,
      };
    case CartActionsTypes.REMOVE_FROM_CART:
      return {
        ...state,
        idList: state.idList.filter((id) => id !== action.payload),
        totalCount: state.totalCount - 1,
      };
    default:
      return state;
  }
};
