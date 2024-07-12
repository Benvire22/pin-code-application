import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IPinCode {
  password: string,
  hiddenPassword: string,
  input: string,
  message: string,
  color: string,
}

const PIN_CODE = '1377';

const initialState: IPinCode = {
  password: PIN_CODE,
  hiddenPassword: '',
  input: '',
  message: '',
  color: '#ffffff',
};

const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    setInput(state, action: PayloadAction<string>) {
      if (state.input.length < 4) {
        state.input = state.input + action.payload;
      }
    },
    deleteLastInput(state) {
      if (state.input.length > 0) {
        state.input = state.input.slice(0, -1);
      }
    },
    setMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
    setColor(state, action: PayloadAction<string>) {
      state.color = action.payload;
    },
    setHiddenPassword(state) {
      let password = '';

      for (let i = 0; i < state.input.length; i++) {
        password += '*';
      }

      state.hiddenPassword = password;
    }
  }
});

export const {
  setInput,
  deleteLastInput,
  setMessage,
  setColor,
  setHiddenPassword,
} = passwordSlice.actions;

export default passwordSlice;