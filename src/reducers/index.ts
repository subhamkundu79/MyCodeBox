import { combineReducers } from 'redux';
import { loginReducer } from './userLoginReducer';
import { postreducer } from './allPosts.reducer';

const rootReducer = combineReducers({
     userlogin: loginReducer,
     allPosts: postreducer
})
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;