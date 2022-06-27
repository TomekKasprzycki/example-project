import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { User } from '../../model/User';

interface loginSliceState {
    activeUser: User;
}

const initialState: loginSliceState = {
    activeUser: {
      id: 0,
      login: "",
      name: "",
      password: "",
      password2: "",
      role: "",
      active: false,
  }
}

export const loginSlice = createSlice({
    name: 'activeUser',
    initialState,
    reducers: {
        loginUserToState: (state, action:PayloadAction<User>) => {
        state.activeUser = action.payload;
      },
      removeUseFromState: (state) => {
        state.activeUser = initialState.activeUser;
      }
    }
  });

  export const { loginUserToState, removeUseFromState } = loginSlice.actions;

  export const showActiveUser = (state: RootState) => state.activeUser;
  
  export default loginSlice.reducer;

// export {}