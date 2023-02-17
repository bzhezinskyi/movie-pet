import { createSlice } from '@reduxjs/toolkit';

const themaInitialValue = { value: 'dark' };

const themaValue = createSlice({
  name: 'thema',
  initialState: themaInitialValue,
  reducers: {
    queryThemaValue(state, action) {
      state.value = action.payload;
    },
  },
});

export const { queryThemaValue } = themaValue.actions;
export const themaReduser = themaValue.reducer;
