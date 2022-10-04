import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  errorToast,
  successToast,
  warningToast,
} from '../../components/helpers/toasts';
import { ICart, ICartProducts, IProduct } from '../../interfaces/IProduct';

const cartItemsLS = localStorage.getItem('cartItems');

const initialState: ICart = {
  cartItems: cartItemsLS ? JSON.parse(cartItemsLS) : [],
};

const cartSlice = createSlice({
  name: '@@cartItems',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<ICartProducts>) => {
      const itemInCart = state.cartItems.findIndex(
        (item: IProduct) => item.id === action.payload.id,
      );
      if (itemInCart >= 0) {
        state.cartItems[itemInCart].itemQty++;
        successToast();
      } else {
        const tempProduct = { ...action.payload, itemQty: 1 };
        state.cartItems.push(tempProduct);
        successToast();
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeItemFromCart: (state, action) => {
      const removedItems = state.cartItems.filter(
        (item: IProduct) => item.id !== action.payload.id,
      );
      state.cartItems = removedItems;
      errorToast();
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    decreaseCartQuantity: (state, action) => {
      const itemInCart = state.cartItems.findIndex(
        (item: IProduct) => item.id === action.payload.id,
      );

      if (state.cartItems[itemInCart].itemQty > 1) {
        state.cartItems[itemInCart].itemQty -= 1;
        warningToast();
      } else if (state.cartItems[itemInCart].itemQty === 1) {
        const removedItems = state.cartItems.filter(
          (item: IProduct) => item.id !== action.payload.id,
        );
        state.cartItems = removedItems;
        errorToast();
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
  },
});
export const { addItemToCart, removeItemFromCart, decreaseCartQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
