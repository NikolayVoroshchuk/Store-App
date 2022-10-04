/* eslint-disable jsx-a11y/anchor-is-valid */
import CardInShopCart from '../../components/CardInShopCart';
import MainLayout from '../../layout';
import { useCartItems } from '../../hooks/useCartItems';
import { IProduct } from '../../interfaces/IProduct';
import { Link } from 'react-router-dom';
import cls from './index.module.scss';
import { useState } from 'react';
import Modal from '../../components/Modal';

function CartPage() {
  const [openModal, setOpenModal] = useState(false);
  const { cartItems, getTotal } = useCartItems();
  const { totalAmount, totalQuantity } = getTotal();
  const emptyCartPage = require('../../assets/img/emptyCartPage.png');

  const modalWindow = () => setOpenModal(!openModal);

  return (
    <MainLayout>
      <div className="uk-container uk-container-large">
        <h1>Shopping Cart</h1>
        {!cartItems.length ? (
          <div className={cls.wrapper}>
            <div className={cls.emptyCartImg}>
              <img src={emptyCartPage} alt="emptyCart" />
            </div>
            <h2>Your cart is empty</h2>
            <h4>Please add at least one item to order</h4>
            <Link to={'/'}>
              <button>&larr; choose a product</button>
            </Link>
          </div>
        ) : (
          <div className={cls.cartItems}>
            {cartItems.map((item: IProduct, id: number) => (
              <CardInShopCart key={id} {...item} />
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
              <button
                className="uk-button uk-button-default"
                uk-toggle="target: #modal-center"
                onClick={modalWindow}
              >
                ORDER
              </button>
            </div>
          </div>
        )}
      </div>
      <Modal />
    </MainLayout>
  );
}

export default CartPage;
