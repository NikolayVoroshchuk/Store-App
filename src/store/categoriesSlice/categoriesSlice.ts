import { AnyAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ICategories } from '../../interfaces/IProduct';
import { useHttp } from '../../services/http.hook';

const initialState: ICategories = {
  categories: [],
  isLoading: false,
  error: false,
};

export const fetchAllCategories = createAsyncThunk(
  '@@categories/fetchAllCategories',
  () => {
    const { request } = useHttp();
    const url = 'https://fakestoreapi.com/products/categories';
    return request(url);
  },
);

const categoriesSlice = createSlice({
  name: '@@categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCategories.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(
      fetchAllCategories.fulfilled,
      (state, action: AnyAction) => {
        state.categories = [...action.payload];
        state.isLoading = false;
        state.error = false;
      },
    );
    builder.addCase(fetchAllCategories.rejected, (state) => {
      state.categories = [];
      state.isLoading = false;
      state.error = true;
    });
  },
});

export default categoriesSlice.reducer;
