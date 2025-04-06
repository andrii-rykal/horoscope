import { createSlice, PayloadAction, Middleware } from '@reduxjs/toolkit';
import { HoroscopeState, ZodiacSign } from '@/types/horoscope';

const getInitialState = (): HoroscopeState => {
  if (typeof window === 'undefined')
    return {
      selectedSign: 'aries',
      periodDays: 3,
      theme: 'light',
    };

  const saved = localStorage.getItem('horoscope');
  return saved
    ? JSON.parse(saved)
    : {
        selectedSign: 'aries',
        periodDays: 3,
        theme: 'light',
      };
};

const initialState = getInitialState();

export const horoscopeSlice = createSlice({
  name: 'horoscope',
  initialState,
  reducers: {
    setSign: (state, action: PayloadAction<ZodiacSign>) => {
      state.selectedSign = action.payload;
    },
    setPeriod: (state, action: PayloadAction<3 | 7>) => {
      state.periodDays = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const localStorageMiddleware: Middleware = (store) => (next) => (action: unknown) => {
  const result = next(action);
  if (typeof action === 'object' && action !== null && 'type' in action) {
    if (String(action.type).startsWith('horoscope/')) {
      localStorage.setItem('horoscope', JSON.stringify(store.getState().horoscope));
    }
  }
  return result;
};

export const { setSign, setPeriod, toggleTheme } = horoscopeSlice.actions;
export default horoscopeSlice.reducer;
