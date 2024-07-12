import {configureStore} from '@reduxjs/toolkit';
import passwordSlice from "../containers/PinCode/pinCodeSlice";



const  store =  configureStore({
    reducer: passwordSlice.reducer
});

export type RootState = ReturnType<typeof store.getState>;

export default store;