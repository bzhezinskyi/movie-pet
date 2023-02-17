import { configureStore } from '@reduxjs/toolkit';
import { themaReduser } from './thema/thema.slise';

export const store = configureStore({
  reducer: { thema: themaReduser },
});
