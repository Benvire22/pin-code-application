import { configureStore } from '@reduxjs/toolkit';
import pinCodeSlice from '../containers/PinCode/pinCodeSlice';

const store = configureStore({
  reducer: pinCodeSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;