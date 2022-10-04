/* eslint-disable jsx-a11y/anchor-has-content */
import { Link } from 'react-router-dom';
import { EmptyCart } from '../../assets/svg/emptyCart';
import { useCartItems } from '../../hooks/useCartItems';
import { ICartProducts } from '../../interfaces/IProduct';
import CardInDrawer from '../CardInDrawer';
import cls from './index.module.scss';
import './index.scss';

const Drawer = () => {
  const { cartItems, getTotal } = useCartItems();
  const { totalAmount, totalQuantity } = getTotal();
  return (
    <>
      {!totalQuantity ? null : (
        <span
          className="uk-badge"
          style={{ position: 'absolute', top: '20px' }}
        >
          {totalQuantity}
        </span>
      )}
      <a
        href="#offcanvas-flip"
        uk-toggle="target: #offcanvas-flip"
        uk-icon="cart"
      ></a>
      <div
        id="offcanvas-flip"
        uk-offcanvas="flip: true; overlay: true; selPanel: .uk-offcanvas-bar-light;"
      >
        <div className="uk-offcanvas-bar-light">
          <button
            className="uk-offcanvas-close"
            type="button"
            uk-close="true"
          ></button>
          <h3 className={cls.title}>Cart</h3>
          {!cartItems.length ? (
            <div className={cls.wrapperEmptyCart}>
              <div className={cls.emptyCartImg}>
                <EmptyCart />
              </div>
              <h4>Сart is empty</h4>
              <p>Please add at least one product to place an order</p>
            </div>
          ) : (
            <div className={cls.cartItems}>
              {cartItems.map((item: ICartProducts, id: number) => (
                <CardInDrawer key={id} {...item} />
              ))}
              <div className={cls.total}>
                <div className="uk-grid" uk-grid="true">
                  <div className="uk-width-expand" uk-leader="true">
                    Total Quantity:
                  </div>
                  <div style={{ paddingLeft: '15px' }}>{totalQuantity}</div>
                </div>
                <div className="uk-grid" uk-grid="true">
                  <div className="uk-width-expand" uk-leader="true">
                    Total Amount:
                  </div>
                  <div style={{ paddingLeft: '15px' }}>
                    {totalAmount.toFixed(2)}$
                  </div>
                </div>
                <Link to={'/cartPage'}>
                  <button className="uk-button uk-button-default">
                    CHECKOUT
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Drawer;
