import { useState } from 'react';
import { ICartProducts } from '../../interfaces/IProduct';
import { useCartItems } from '../../hooks/useCartItems';
import { Order } from '../../assets/svg/order';
import { Link } from 'react-router-dom';
import './index.scss';
import cls from './index.module.scss';

const Modal = () => {
  const [order, setOrder] = useState(false);
  const { cartItems, getTotal } = useCartItems();
  const { totalAmount, totalQuantity } = getTotal();

  const makeOrder = () => setOrder(true);

  return (
    <div
      id="modal-center"
      className="uk-flex-top"
      uk-modal="true"
      bg-close="false"
    >
      <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
        <button className="uk-modal-close-default" uk-close="true"></button>
        {order ? (
          <div className={cls.orderProcessed}>
            <Order />
            <h2>
              Thank you for the order, our managers will contact you soon to
              clarification of details and confirm the order
            </h2>
          </div>
        ) : (
          <div className={cls.orderBody}>
            <h1>Ordering</h1>
            <div className={cls.contactWrap}>
              <form>
                <h3>Contact Details</h3>
                <div className="uk-margin">
                  <div className={cls.col1}>
                    <div className={cls.name}>
                      <label className="uk-form-label">Name</label>
                      <input
                        className="uk-input uk-form-width-large"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    <div className={cls.sirname}>
                      <label className="uk-form-label">Sirname</label>
                      <input
                        className="uk-input uk-form-width-large"
                        type="text"
                        placeholder="Sirname"
                      />
                    </div>
                  </div>
                  <div className={cls.col2}>
                    <div className={cls.phone}>
                      <label className="uk-form-label">Phone</label>
                      <input
                        className="uk-input uk-form-width-large"
                        type="number"
                        placeholder="Mobile phone"
                      />
                    </div>
                    <div className={cls.email}>
                      <label className="uk-form-label">E-Mail</label>
                      <input
                        className="uk-input uk-form-width-large"
                        type="email"
                        placeholder="E-Mail"
                      />
                    </div>
                  </div>
                  <div className={cls.titleOrder}>
                    <h3>Your Order</h3>
                  </div>
                  <div className={cls.products}>
                    {cartItems.map((item: ICartProducts, idx: number) => (
                      <div className={cls.productBody} key={idx}>
                        <div className={cls.productWrapper}>
                          <div className={cls.productImg}>
                            <Link to={`/detailsPage?product=${item.id}`}>
                              <img src={item.image} alt="itemImg" />
                            </Link>
                          </div>
                          <div className={cls.productTitle}>
                            <Link to={`/detailsPage?product=${item.id}`}>
                              <h4>{item.title}</h4>
                            </Link>
                          </div>
                          <div className={cls.productQty}>
                            <span>Quantity</span>
                            <h4>{item.itemQty}</h4>
                          </div>
                          <div className={cls.productPrice}>
                            <span>Price</span>
                            <h4>{item.price}$</h4>
                          </div>
                          <div className={cls.more}>
                            <span uk-icon="more-vertical"></span>
                            <div uk-dropdown="mode: click">
                              <span>Delete product</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <h3>Delivery</h3>
                  <div className={cls.delivery}>
                    <div className={cls.deliveryWrap}>
                      <div className={cls.country}>
                        <label className="uk-form-label">Country</label>
                        <input
                          className="uk-input uk-form-width-large"
                          type="text"
                          placeholder="Your country"
                        />
                      </div>
                      <div className={cls.city}>
                        <label className="uk-form-label">City</label>
                        <input
                          className="uk-input uk-form-width-large"
                          type="text"
                          placeholder="Your city"
                        />
                      </div>
                    </div>
                    <div className={cls.deliveryMethod}>
                      <div className={cls.inputs}>
                        <div className={cls.pickup}>
                          <input
                            type="radio"
                            className={cls.radio}
                            id="pickup"
                            value="pickup"
                            name="delivery"
                          />
                          <label htmlFor="pickup">Pickup from our stores</label>
                        </div>
                        <div className={cls.courier}>
                          <input
                            type="radio"
                            className={cls.radio}
                            id="courier"
                            value="courier"
                            name="delivery"
                          />
                          <label htmlFor="courier">
                            Courier at your address
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3>Payment</h3>
                  <div className={cls.payment}>
                    <div className={cls.paymentWrap}>
                      <div className={cls.paymentInput}>
                        <input
                          type="radio"
                          className={cls.radio}
                          name="payment"
                          id="receipt"
                        />
                        <label htmlFor="receipt">
                          Payment upon receipt of goods
                        </label>
                      </div>
                      <div className={cls.paymentInput}>
                        <input
                          type="radio"
                          className={cls.radio}
                          name="payment"
                          id="legalEntities"
                        />
                        <label htmlFor="legalEntities">
                          Payment cashless for legal entities
                        </label>
                      </div>
                      <div className={cls.paymentInput}>
                        <input
                          type="radio"
                          className={cls.radio}
                          name="payment"
                          id="individuals"
                        />
                        <label htmlFor="individuals">
                          Payment cashless for individuals
                        </label>
                      </div>
                      <div className={cls.paymentInput}>
                        <input
                          type="radio"
                          className={cls.radio}
                          name="payment"
                          id="payPal"
                        />
                        <label htmlFor="payPal">PayPal</label>
                      </div>
                      <div className={cls.paymentInput}>
                        <input
                          type="radio"
                          className={cls.radio}
                          name="payment"
                          id="credit"
                        />
                        <label htmlFor="credit">Credit</label>
                      </div>
                    </div>
                  </div>
                  <div className={cls.total}>
                    <div className="uk-grid" uk-grid="true">
                      <div className="uk-width-expand" uk-leader="true">
                        <span>Total Quantity:</span>
                      </div>
                      <div className={cls.quantity}>{totalQuantity}</div>
                    </div>
                    <div className="uk-grid" uk-grid="true">
                      <div className="uk-width-expand" uk-leader="true">
                        <span>Total Amount:</span>
                      </div>
                      <div className={cls.amount}>
                        {totalAmount.toFixed(2)}$
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="uk-button uk-button-default"
                  onClick={makeOrder}
                >
                  MAKE ORDER
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
