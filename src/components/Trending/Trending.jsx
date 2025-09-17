import styles from './Trending.module.css';
import { ProductsContext } from '../../context/ProductsContext';
import { useContext } from 'react';

export default function Trending() {
  const { products } = useContext(ProductsContext);

  return (
    <section className={styles.trending}>
      <h2 className={styles.heading}>NOW TRENDING</h2>
      <ul className={styles['products-list']}>
        {products.map((item, index) => {
          return (
            <li
              key={index}
              className={styles.product}
            >
              <h3 className={styles['product-title']}>{item.name}</h3>
              <div className={styles['img-container']}>
                <img
                  className={styles['img']}
                  src={item.image}
                ></img>
              </div>
              <div className={styles['number-wrapper']}>
                <p className={styles.price}>{item.price}</p>
                <div>
                  <input
                    type="number"
                    className={styles['number-input']}
                  ></input>
                  <button
                    type="button"
                    className={styles['cart-btn']}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
