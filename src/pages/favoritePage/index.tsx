import { useCartItems } from '../../hooks/useCartItems';
import { useFavorites } from '../../hooks/useFavorites';
import { IFvoriteProduct } from '../../interfaces/IProduct';
import { Link } from 'react-router-dom';
import MainLayout from '../../layout';
import cls from './index.module.scss';
import CardInFavoritePage from '../../components/CardInFavoritePage';

function FavoritePage() {
  const emptyFavoritePage = require('../../assets/img/favoriteIcon.png');
  const { favoriteItems } = useFavorites();
  const { addToCart } = useCartItems();

  return (
    <MainLayout>
      <div className="uk-container uk-container-large">
        <h1>Favorite Page</h1>
        <div className="uk-flex uk-flex-wrap">
          {!favoriteItems.length ? (
            <div className={cls.wrapper}>
              <div className={cls.emptyCartImg}>
                <img src={emptyFavoritePage} alt="favoriteImg" />
              </div>
              <h2>No items in favorite</h2>
              <h4>Add at least one item to favorite list</h4>
              <Link to={'/'}>
                <button>&larr; choose a product</button>
              </Link>
            </div>
          ) : (
            favoriteItems.map((item: IFvoriteProduct) => (
              <CardInFavoritePage
                key={item.id}
                {...item}
                addToCart={addToCart}
              />
            ))
          )}
        </div>
      </div>
    </MainLayout>
  );
}

export default FavoritePage;
