import styles from './TextEntry.module.css';

export default function TextEntry({ placeholder, value, onChange, onKeyDown }) {
  return (
    <input
      className={styles.search}
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}