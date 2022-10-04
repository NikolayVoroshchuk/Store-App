import { AnyAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IProduct, ISingleProduct } from '../../interfaces/IProduct';
import { useHttp } from '../../services/http.hook';

export const initialState: ISingleProduct = {
  product: {} as IProduct,
  error: false,
};

export const fetchSingleProduct = createAsyncThunk(
  '@@singleProduct/fetchSingleProduct',
  (id: string) => {
    const { request } = useHttp();
    const url = `https://fakestoreapi.com/products/${id}`;
    return request(url);
  },
);

const singleProductSlice = createSlice({
  name: '@@singleProduct',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.pending, (state) => {
      state.product = {} as IProduct;
      state.error = false;
    });
    builder.addCase(
      fetchSingleProduct.fulfilled,
      (state, { payload }: AnyAction) => {
        state.product = payload;
        state.error = false;
      },
    );
    builder.addCase(fetchSingleProduct.rejected, (state) => {
      state.error = true;
    });
  },
});

export default singleProductSlice.reducer;
