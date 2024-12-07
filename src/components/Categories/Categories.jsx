import styles from './Categories.module.css';

export default function Categories() {
  const categories = ['DRESSES', 'TOPS', 'PLUS + CURVE', 'MEN']

  return (
    <section className={styles.categories}>
      <h2 className={styles.heading}>SHOP CATEGORIES</h2>
      <div className={styles.background}></div>
      <nav>
        <ul className={styles['categories-list']}>
          {categories.map((item, i) => {
            return (
            <li key={i} className={styles[`category${i}`]}>
              <a href="">{item}</a>
            </li>
            )
          })}
        </ul>
      </nav>
    </section>
  );
}
