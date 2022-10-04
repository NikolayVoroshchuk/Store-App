import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../interfaces/IProduct';
import { fetchAllCategories } from '../store/categoriesSlice/categoriesSlice';
import { AppDispatch } from '../store/store';

export const useCategories = () => {
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector((state: IState) => state);
  useEffect(() => {
    dispatch(fetchAllCategories());
    // eslint-disable-next-line
  }, []);

  const { categories } = state;
  return categories;
};
