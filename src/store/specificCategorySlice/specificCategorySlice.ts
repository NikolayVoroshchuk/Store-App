import { AnyAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ISpecificCategory } from '../../interfaces/IProduct';
import { useHttp } from '../../services/http.hook';

const initialState: ISpecificCategory = {
  specificCategories: [],
  isLoading: false,
  error: false,
};

export const fetchSpecificCategory = createAsyncThunk(
  '@@specificCategories/fetchSpecificCategory',
  (category: string) => {
    const { request } = useHttp();
    const url = `https://fakestoreapi.com/products/category/${category}`;
    return request(url);
  },
);

const specificCategoriesSlice = createSlice({
  name: '@@specificCategories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSpecificCategory.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(
      fetchSpecificCategory.fulfilled,
      (state, action: AnyAction) => {
        state.specificCategories = [...action.payload];
        state.isLoading = false;
        state.error = false;
      },
    );
    builder.addCase(fetchSpecificCategory.rejected, (state) => {
      state.specificCategories = [];
      state.isLoading = false;
      state.error = true;
    });
  },
});

export default specificCategoriesSlice.reducer;
