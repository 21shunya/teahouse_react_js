import { FavouriteActionsTypes } from '../../types/favourite';

export const addFavoriteAction = (payload: number) => ({
  type: FavouriteActionsTypes.ADD_TO_FAVOURITE,
  payload,
});
export const removeFavoriteAction = (payload: number) => ({
  type: FavouriteActionsTypes.REMOVE_FROM_FAVOURITE,
  payload,
});
