import { ButtonChecked } from '../../assets/svg/btn-checked';
import { ButtonLiked } from '../../assets/svg/btn-liked';
import { ButtonPlus } from '../../assets//svg/btn-plus';
import { Link, useNavigate } from 'react-router-dom';
import { ICard, ICartProducts } from '../../interfaces/IProduct';
import { useState } from 'react';
import { useFavorites } from '../../hooks/useFavorites';
import cls from './index.module.scss';

const CardInFavoritePage = ({ image, price, title, id, addToCart }: ICard) => {
  const [isAdded, setIsAdded] = useState(false);
  const [goToCartPage, setGoToCartPage] = useState(0);
  const { removeFromFavorite } = useFavorites();
  let navigate = useNavigate();

  const addItemToCart = (products: ICartProducts) => {
    addToCart(products);
    setIsAdded(true);
    setGoToCartPage(goToCartPage + 1);
    if (goToCartPage) navigate('/cartPage');
  };

  const removeItemFromFavorite = (product: any) => {
    removeFromFavorite(product);
  };

  return (
    <div className="uk-card uk-card-hover uk-card-body">
      <div className={cls.mainInfoCard}>
        <div className={cls.favorite}>
          <ButtonLiked />
          <span
            onClick={() => removeItemFromFavorite({ id })}
            className="uk-margin-small-right"
            uk-icon="trash"
          ></span>
        </div>
        <div className={cls.cardImg}>
          <Link to={`/detailsPage?product=${id}`}>
            <img src={image} alt="img" />
          </Link>
        </div>
        <div className={cls.cardTitle}>
          <Link to={`/detailsPage?product=${id}`}>
            <h4>{title}</h4>
          </Link>
        </div>
      </div>
      <div className={cls.footerCard}>
        <div className={cls.price}>
          <p>{price}$</p>
        </div>
        <div
          className={cls.addToCart}
          onClick={() => addItemToCart({ title, price, image, id })}
        >
          {isAdded ? <ButtonChecked /> : <ButtonPlus />}
        </div>
      </div>
    </div>
  );
};

export default CardInFavoritePage;
