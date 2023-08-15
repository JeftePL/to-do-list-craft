import styles from './Title.module.css';

export default function Title({ children, id, onClick }) {
  return (
    <h2 id={id} onClick={onClick} className={styles.title}>
      {children}
    </h2>
  )
}