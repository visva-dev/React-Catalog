/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const characterSlice = createSlice({
  name: 'character',
  initialState: {
    character: null,
  },
  reducers: {
    setCharacter: (state, action) => {
      state.character = action.payload;
    },
  },
});

export const { setCharacter } = characterSlice.actions;

export const selectCharacter = state => state.character.character;

export default characterSlice.reducer;
