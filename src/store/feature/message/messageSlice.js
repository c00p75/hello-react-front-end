import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  data: ' ',
};

const baseUrl = 'http://127.0.0.1:4000/greetings/1';

export const fetchMessage = createAsyncThunk('greetings/fetchmessage', async () => {
  return fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => data.message);
});

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchMessage.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default messageSlice.reducer;
