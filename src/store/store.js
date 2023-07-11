import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './feature/message/messageSlice';

export const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});
