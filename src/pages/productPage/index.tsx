import { useCartItems } from '../../hooks/useCartItems';
import { useSingleProduct } from '../../hooks/useSingleProduct';
import { ICartProducts, IProduct } from '../../interfaces/IProduct';
import MainLayout from '../../layout';

import cls from './index.module.scss';

function ProductPage() {
  const { singleProduct } = useSingleProduct();
  const { title, price, description, image, rating }: IProduct =
    singleProduct.product;
  const { addToCart } = useCartItems();

  const addItemToCart = (product: ICartProducts) => {
    addToCart(product);
  };

  return (
    <MainLayout>
      {!singleProduct.product.title ? (
        <span
          uk-spinner="ratio: 4.5"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        ></span>
      ) : (
        <div className="uk-container uk-container-large">
          <div className={cls.wrapper}>
            <div className={cls.image}>
              <img src={image} alt="img" />
            </div>
            <div className={cls.infoProduct}>
              <div className={cls.title}>
                <h1>{title}</h1>
              </div>
              <div className={cls.description}>
                <p>Description</p>
                <h4>{description}</h4>
              </div>
              <div className={cls.rating}>
                <div className={cls.rate}>Rating: {rating?.rate}</div>
                <div className={cls.count}>Count: {rating?.count}</div>
              </div>
              <div className={cls.price}>
                <h3>Price: {price}$</h3>
              </div>
              <div className={cls.addToCart}>
                <button onClick={() => addItemToCart({ title, price, image })}>
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
}

export default ProductPage;
