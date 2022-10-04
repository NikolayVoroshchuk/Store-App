import { useDispatch, useSelector } from 'react-redux';
import { IFvoriteProduct, IState } from '../interfaces/IProduct';
import { AppDispatch } from '../store/store';
import {
  addItemToFavorite,
  removeItemFromFavorite,
} from '../store/favoriteSlice/favoriteSlice';

export const useFavorites = () => {
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector((state: IState) => state);

  const addToFavorites = (product: IFvoriteProduct) =>
    dispatch(addItemToFavorite(product));

  const removeFromFavorite = (product: number) =>
    dispatch(removeItemFromFavorite(product));

  const {
    favorite: { favoriteItems },
  } = state;
  return { addToFavorites, removeFromFavorite, favoriteItems };
};
