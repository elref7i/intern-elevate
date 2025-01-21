// import { productState } from '@/types/product.types';
import { productState } from '@/types/product.types';
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
export const getSingleProduct = createAsyncThunk(
  'producrs/getSingleProduct',
  async (id: string) => {
    const options = {
      url: `https://fakestoreapi.com/products/${id}`,
      method: 'GET',
    };
    const { data } = await axios.request(options);
    return data;
  }
);
const initialState: productState = {
  data: null,
  isFetched: false,
  singleProduct: null,
};

const productSlice = createSlice({
  name: 'producrs',
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isFetched = true;
    });
    builder.addCase(getProducts.rejected, () => {
      console.log('flase');
    });
    builder.addCase(getSingleProduct.fulfilled, (state, action) => {
      state.singleProduct = action.payload;
      state.isFetched = true;
    });
    builder.addCase(getSingleProduct.rejected, () => {
      console.log('flase');
    });
  },
});

const productReducer = productSlice.reducer;
export default productReducer;
