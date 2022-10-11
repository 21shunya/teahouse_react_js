import { FavouriteAction, FavouriteActionsTypes, FavouriteState } from '../../types/favourite';

const initialState: FavouriteState = {
  totalCount: 0,
  idList: [],
};

export const favoriteReducer = (state = initialState, action: FavouriteAction): FavouriteState => {
  switch (action.type) {
    case FavouriteActionsTypes.ADD_TO_FAVOURITE:
      return {
        ...state,
        idList: [...state.idList, action.payload],
        totalCount: state.totalCount + 1,
      };
    case FavouriteActionsTypes.REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        idList: state.idList.filter((id) => id !== action.payload),
        totalCount: state.totalCount - 1,
      };
    default:
      return state;
  }
};
