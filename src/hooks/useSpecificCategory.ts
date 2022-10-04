import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../interfaces/IProduct';
import { fetchSpecificCategory } from '../store/specificCategorySlice/specificCategorySlice';
import { AppDispatch } from '../store/store';

export const useSpecificCategory = () => {
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector((state: IState) => state);

  const changeCategory = (category: string) =>
    dispatch(fetchSpecificCategory(category));

  const {
    specificCategories: { specificCategories },
  } = state;
  return { changeCategory, specificCategories };
};
