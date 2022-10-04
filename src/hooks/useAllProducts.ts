import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../interfaces/IProduct';
import { fetchAllProducts } from '../store/allProductsSlice/allProductsSlice';
import { AppDispatch } from '../store/store';

export const useAllProducts = () => {
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector((state: IState) => state);
  useEffect(() => {
    dispatch(fetchAllProducts());
    // eslint-disable-next-line
  }, []);

  const {
    allProducts: { products },
  } = state;

  return { products };
};
