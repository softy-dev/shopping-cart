import styles from './Header.module.css';
import bag from '../../assets/bag.svg';
import account from '../../assets/account.svg';

export default function Header() {
  return (
    <>
      <header>
        <div className={styles.logo}>
          <h1>
            <span>Aura.</span>
            <span>Avenue</span>
          </h1>
        </div>
        <nav aria-label="primary-navigation">
          <ul className={styles['navigation-links']}>
            <li>
              <a
                href="#"
                className={styles.active}
              >
                HOME
              </a>
            </li>
            <li>
              <a href="#">SHOP</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">NEWS & UPDATE</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </nav>
        <nav aria-label="user-navigation">
          <ul className={styles['secondary-navigation-links']}>
            <li className={styles.cart}>
              <a href="">
                <img
                  src={bag}
                  alt="Shopping Cart"
                ></img>
                <span className={styles.count}>0</span>
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src={account}
                  alt="Login"
                ></img>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
