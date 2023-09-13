import { configureStore } from '@reduxjs/toolkit';
import habitReducer from '../features/habit/habitSlice';

export const store = configureStore({
  reducer: habitReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
