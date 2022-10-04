import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { DeleteItem } from '../../assets/svg/deleteItem';
import { ICartProducts } from '../../interfaces/IProduct';
import {
  addItemToCart,
  decreaseCartQuantity,
  removeItemFromCart,
} from '../../store/cartSlice/cartSlice';
import { AppDispatch } from '../../store/store';
import cls from './index.module.scss';

const CardInShopCart = ({
  title,
  price,
  image,
  id,
  itemQty,
}: ICartProducts) => {
  const dispatch: AppDispatch = useDispatch();

  const handleRemoveItemFromCart = (cartItem: any) => {
    dispatch(removeItemFromCart(cartItem));
  };

  const handleChangeQuantity = (
    cartItem: any,
    { currentTarget }: React.MouseEvent<HTMLButtonElement>,
  ) => {
    if (currentTarget.textContent === '-') {
      dispatch(decreaseCartQuantity(cartItem));
    }
    if (currentTarget.textContent === '+') {
      dispatch(addItemToCart(cartItem));
    }
  };

  return (
    <div
      className="uk-child uk-grid-small uk-grid-match"
      uk-grid="true"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <div>
        <div
          className="uk-card uk-card-default uk-card-small uk-card-body"
          style={{ border: 'none', marginBottom: '25px' }}
        >
          <div className={cls.itemsWrapper}>
            <div className={cls.itemImg}>
              <Link to={`/detailsPage?product=${id}`}>
                <img src={image} alt="imgProduct" />
              </Link>
            </div>
            <div className={cls.wrapItemInfo}>
              <div className={cls.wrapTitle} style={{ width: '100%' }}>
                <div className={cls.link}>
                  <Link to={`/detailsPage?product=${id}`}>
                    <h6
                      className="uk-card-title"
                      style={{ marginBottom: '0', fontSize: '18px' }}
                    >
                      {title}
                    </h6>
                  </Link>
                </div>
                <div className={cls.price}>
                  <p style={{ fontSize: '18px' }}>{price}$</p>
                </div>
              </div>
              <div className={cls.changeQuantity}>
                <div className={cls.wrapper}>
                  <button
                    className={cls.dec}
                    onClick={(event) => handleChangeQuantity({ id }, event)}
                  >
                    -
                  </button>
                  <div className={cls.quantityItem}>{itemQty}</div>
                  <button
                    className={cls.inc}
                    onClick={(event) => handleChangeQuantity({ id }, event)}
                  >
                    +
                  </button>
                </div>
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
    </div>
  );
};

export default CardInShopCart;
