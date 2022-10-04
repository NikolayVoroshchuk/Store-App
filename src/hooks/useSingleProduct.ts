import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { IState } from '../interfaces/IProduct';
import { fetchSingleProduct } from '../store/singleProductSlice/singleProductSlice';
import { AppDispatch } from '../store/store';

export const useSingleProduct = () => {
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector((state: IState) => state);
  const [searchParams] = useSearchParams();
  const selectedProduct = searchParams.get('product');

  useEffect(() => {
    if (selectedProduct) dispatch(fetchSingleProduct(selectedProduct));
    // eslint-disable-next-line
  }, []);

  const { singleProduct } = state;
  return { singleProduct };
};
