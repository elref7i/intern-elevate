// import { productState } from '@/types/product.types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export const getProducts = createAsyncThunk(
  'producrs/getProducts',
  async () => {
    const options = {
      url: 'https://fakestoreapi.com/products',
      method: 'GET',
    };
    const { data } = await axios.request(options);
    return data;
  }
);
// const initialState: productState = {
//   data: null,
// };

const productSlice = createSlice({
  name: 'producrs',
  initialState: {
    data: null,
  },
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getProducts.rejected, () => {
      console.log('flase');
    });
  },
});

const productReducer = productSlice.reducer;
export default productReducer;
