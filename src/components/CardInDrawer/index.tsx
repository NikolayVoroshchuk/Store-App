import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { DeleteItem } from '../../assets/svg/deleteItem';
import { ICartProducts } from '../../interfaces/IProduct';
import { removeItemFromCart } from '../../store/cartSlice/cartSlice';
import { AppDispatch } from '../../store/store';
import cls from './index.module.scss';

const CardInDrawer = ({ title, price, image, id }: ICartProducts) => {
  const dispatch: AppDispatch = useDispatch();
  const handleRemoveItemFromCart = (cartItem: any) => {
    dispatch(removeItemFromCart(cartItem));
  };

  return (
    <div
      className="uk-child uk-grid-small uk-grid-match"
      uk-grid="true"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <div
        className="uk-card uk-card-default uk-card-small uk-card-body"
        style={{ border: 'none', marginBottom: '0px' }}
      >
        <div className={cls.itemsWrapper}>
          <div className={cls.itemImg}>
            <Link to={`/detailsPage?product=${id}`}>
              <img src={image} alt="imgProduct" />
            </Link>
          </div>
          <div className={cls.wrapItemInfo}>
            <div className={cls.wrapTitle}>
              <div className={cls.link}>
                <Link to={`/detailsPage?product=${id}`}>
                  <h5 className="uk-card-title">{title}</h5>
                </Link>
              </div>
              <p>{price}$</p>
            </div>
          </div>
          <div className={cls.deleteItemImg}>
            <button onClick={() => handleRemoveItemFromCart({ id })}>
              <DeleteItem />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInDrawer;
