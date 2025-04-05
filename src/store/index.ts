import { configureStore } from '@reduxjs/toolkit';
import { catFactsApi } from './api/catFacts';
import horoscopeReducer, { localStorageMiddleware } from './features/horoscopeSlice';

export const store = configureStore({
  reducer: {
    horoscope: horoscopeReducer,
    [catFactsApi.reducerPath]: catFactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catFactsApi.middleware).concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
