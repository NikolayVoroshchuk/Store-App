import { AnyAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IAllProducts } from '../../interfaces/IProduct';
import { useHttp } from '../../services/http.hook';

const initialState: IAllProducts = {
  products: [],
  error: false,
};

export const fetchAllProducts = createAsyncThunk(
  '@@allProducts/fetchAllProducts',
  () => {
    const { request } = useHttp();
    const url = 'https://fakestoreapi.com/products';

    return request(url);
  },
);

const allProductsSlice = createSlice({
  name: '@@allProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.products = [];
      state.error = false;
    });
    builder.addCase(
      fetchAllProducts.fulfilled,
      (state, { payload }: AnyAction) => {
        state.products = [...payload];
        state.error = false;
      },
    );
    builder.addCase(fetchAllProducts.rejected, (state) => {
      state.error = true;
    });
  },
});

export default allProductsSlice.reducer;
