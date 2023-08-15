import styles from './Button.module.css';

export default function Button({ children, onClick, active }) {
  return (
    <button className={`${styles.button} ${active ? styles['button--active'] : ''}`} onClick={onClick}>
      {children}
    </button>
  )
}