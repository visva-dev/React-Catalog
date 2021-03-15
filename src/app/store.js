import { configureStore } from '@reduxjs/toolkit';
import characterReducer from '../features/characterSlice';

export default configureStore({
  reducer: {
    character: characterReducer,
  },
});
