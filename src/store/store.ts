import { configureStore } from '@reduxjs/toolkit';
import allProductsSlice from './allProductsSlice/allProductsSlice';
import cartSlice from './cartSlice/cartSlice';
import categoriesSlice from './categoriesSlice/categoriesSlice';
import favoriteSlice from './favoriteSlice/favoriteSlice';
import singleProductSlice from './singleProductSlice/singleProductSlice';
import specificCategoriesSlice from './specificCategorySlice/specificCategorySlice';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    specificCategories: specificCategoriesSlice,
    allProducts: allProductsSlice,
    singleProduct: singleProductSlice,
    cart: cartSlice,
    favorite: favoriteSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
