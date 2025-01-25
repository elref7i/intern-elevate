import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/products.slice';
// import productReducer from './features/products.slice';
const store = configureStore({
  reducer: {
    productReducer,
  },
});

export default store;

type AppStore = typeof store;

export type SotreState = ReturnType<AppStore['getState']>;
export type SotreDispatch = AppStore['dispatch'];
