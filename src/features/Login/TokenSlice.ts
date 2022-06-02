import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface tokenSliceState {
    currentToken: string;
}

const initialState: tokenSliceState = {
    currentToken: ''
}

export const tokenSlice = createSlice({
    name: 'currentToken',
    initialState,
    reducers: {
        addToken: (state, action:PayloadAction<string>) => {
        state.currentToken = action.payload;
      },
        removeToken: (state) => {
        state.currentToken = '';
      }
    }
  });

  export const { addToken, removeToken } = tokenSlice.actions;

  export const showCurrentToken = (state: RootState) => state.currentToken;
  
  export default tokenSlice.reducer;