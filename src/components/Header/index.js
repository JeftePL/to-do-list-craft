import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.header__title}>To-Do List Craft</h1>
    </div>
  )
}