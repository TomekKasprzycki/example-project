import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage/session';
import { persistReducer, persistStore } from 'redux-persist';
import LoginSlice from '../features/Login/LoginSlice';
import TokenSlice from '../features/Login/TokenSlice';
import thunk from 'redux-thunk';
import { getDefaultMiddleware } from '@reduxjs/toolkit';


// const persistConfig = {
//   key: 'root',
//   storage
// };

// const reducers = combineReducers({
//   activeUser: LoginSlice,
//   currentToken: TokenSlice,
// });

// const persistedReducer = persistReducer(persistConfig, reducers);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: [thunk]
// });

// export let persistor = persistStore(store)
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})


export const store = configureStore({
  reducer: {
  activeUser: LoginSlice,
  currentToken: TokenSlice,
}
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
