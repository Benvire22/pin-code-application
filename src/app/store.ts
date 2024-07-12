import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
    password: '',
    input: '',
    message: '',
    color: '#ffffff',
};

const passwordSlice = createSlice({
    name: 'password',
    initialState,
    reducers: {
        setPassword(state, action: PayloadAction<string>) {
            state.password = action.payload;
        },
        setInput(state, action: PayloadAction<string>) {
            state.input = state.input + action.payload;
        },
        deleteLastInput(state) {
            state.input = state.input.slice(0, -1);
        },
        setMessage(state, action: PayloadAction<string>) {
            state.message = action.payload;
        },
        setColor(state, action: PayloadAction<string>) {
            state.color = action.payload;
        }
    }
});

export const { setPassword, setInput, deleteLastInput, setMessage, setColor } = passwordSlice.actions;

const  store =  configureStore({
    reducer: passwordSlice.reducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;