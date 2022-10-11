export interface FavouriteState {
  totalCount: number;
  idList: Array<number>;
}
export enum FavouriteActionsTypes {
  ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE',
  REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE',
}

interface AddToFavoriteAction {
  type: FavouriteActionsTypes.ADD_TO_FAVOURITE;
  payload: number;
}

interface RemoveFromFavoriteAction {
  type: FavouriteActionsTypes.REMOVE_FROM_FAVOURITE;
  payload: number;
}

export type FavouriteAction = AddToFavoriteAction | RemoveFromFavoriteAction;
