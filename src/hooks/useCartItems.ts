import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ICart, ICartProducts } from '../interfaces/IProduct';
import { addItemToCart } from '../store/cartSlice/cartSlice';
import { AppDispatch } from '../store/store';

export const useCartItems = () => {
  const dispatch: AppDispatch = useDispatch();
  const state: ICart = useSelector((state: typeof cartItems) => state.cart);

  const addToCart = (product: ICartProducts) =>
    dispatch(addItemToCart(product));

  const getTotal = useCallback(() => {
    let totalQuantity = 0;
    let totalAmount = 0;
    state.cartItems.forEach((item: ICartProducts) => {
      totalQuantity += item.itemQty || 0;
      totalAmount += item.price * item.itemQty;
    });
    return { totalAmount, totalQuantity };
  }, [state.cartItems]);
  const { cartItems } = state;
  return { addToCart, getTotal, cartItems };
};
