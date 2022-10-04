import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { infoToast } from '../../components/helpers/toasts';
import { IFavorite, IFvoriteProduct } from '../../interfaces/IProduct';

const initialState: IFavorite = {
  favoriteItems: localStorage.getItem('favoriteItems')
    ? JSON.parse('' + localStorage.getItem('favoriteItems'))
    : [],
};

const favoriteSlice = createSlice({
  name: '@@favoriteItems',
  initialState,
  reducers: {
    addItemToFavorite: (state, action) => {
      const itemIndex = state.favoriteItems.findIndex(
        (item: IFvoriteProduct) => item.id === action.payload.id,
      );

      if (itemIndex === -1) {
        state.favoriteItems.push(action.payload);
        infoToast();
      }

      if (itemIndex >= 0) {
        state.favoriteItems.filter((el) => el.id !== action.payload.id);
      }

      localStorage.setItem(
        'favoriteItems',
        JSON.stringify(state.favoriteItems),
      );
    },

    removeItemFromFavorite: (state, action) => {
      const removedItems = state.favoriteItems.filter(
        (item: IFvoriteProduct) => item.id !== action.payload.id,
      );
      state.favoriteItems = removedItems;
      toast.error('Product is removed from favirites', {
        position: 'bottom-left',
      });
      localStorage.setItem(
        'favoriteItems',
        JSON.stringify(state.favoriteItems),
      );
    },
  },
});

export const { addItemToFavorite, removeItemFromFavorite } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
