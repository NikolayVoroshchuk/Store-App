import { useState } from 'react';
import Card from '../../components/Card';
import Slider from '../../components/Slider';
import { useAllProducts } from '../../hooks/useAllProducts';
import { useCartItems } from '../../hooks/useCartItems';
import { useCategories } from '../../hooks/useCategories';
import { useSpecificCategory } from '../../hooks/useSpecificCategory';
import MainLayout from '../../layout';
import cls from './index.module.scss';
import './index.scss';

function HomePage() {
  const [searchProduct, setSearchProduct] = useState('');
  const { categories } = useCategories();
  const { addToCart } = useCartItems();
  const { products } = useAllProducts();
  const { changeCategory, specificCategories } = useSpecificCategory();

  const mapCategories = [...categories, 'All Products'];

  const handleCategory = (category: string) => {
    changeCategory(category);
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const eventToLowerCase = e.target.value.toLowerCase();
    setSearchProduct(eventToLowerCase);
  };

  const findProducts = products.filter((items: any) => {
    if (!searchProduct) {
      return products;
    } else {
      return items.title.toLowerCase().startsWith(searchProduct);
    }
  });

  return (
    <MainLayout>
      <div className="uk-container uk-container-large">
        <Slider />
        {!categories.length ? (
          <span
            uk-spinner="ratio: 3"
            style={{
              position: 'absolute',
              left: '50%',
              marginTop: '150px',
              transform: 'translate(-50%, -50%)',
            }}
          ></span>
        ) : (
          <>
            <div className={cls.wrapper}>
              <div className="uk-text-lead">
                <ul>
                  {mapCategories.map((item: string, idx: number) => (
                    <li key={idx} onClick={() => handleCategory(item)}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="uk-margin">
                <div className="uk-inline">
                  <span className="uk-form-icon" uk-icon="icon: search"></span>
                  <input
                    className="uk-input"
                    type="text"
                    value={searchProduct}
                    onChange={inputHandler}
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
            <div uk-scrollspy="cls: uk-animation-fade; target: > div .uk-card; delay: 60; repeat: false">
              <div className={cls.cards}>
                {!specificCategories.length
                  ? products &&
                    findProducts.map((item: any) => (
                      <Card key={item.id} {...item} addToCart={addToCart} />
                    ))
                  : specificCategories.map((item: any) => (
                      <Card key={item.id} {...item} addToCart={addToCart} />
                    ))}
              </div>
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
}

export default HomePage;
