import * as CartActionCreators from './cart';
import * as FavoriteActionCreators from './favourite';

export default {
  ...CartActionCreators,
  ...FavoriteActionCreators,
};
