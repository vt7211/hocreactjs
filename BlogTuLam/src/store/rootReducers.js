
import { combineReducers } from 'redux';
import Auth from './auth/reducer';
import Post from './post/reducer';
import User from './user/reducer';
import Category from './category/reducer';

export default combineReducers({
  Auth,
  Post,
  User,
  Category
})

// const rootReducers = combineReducers({
//   Auth,
//   Post,
//   User,
// })

// export default rootReducers;