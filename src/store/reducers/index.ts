import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { favoriteReducer } from './favoriteReducer';

export const rootReducer = combineReducers({
  cart: cartReducer,
  favorite: favoriteReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
