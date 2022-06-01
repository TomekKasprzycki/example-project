import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import LoginSlice from '../features/Login/LoginSlice';
import TokenSlice from '../features/Login/TokenSlice';

export const store = configureStore({
  reducer: {
    activeUser: LoginSlice,
    currentToken: TokenSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
// export {}