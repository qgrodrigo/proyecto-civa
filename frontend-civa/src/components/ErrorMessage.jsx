import styles from './ErrorMessage.module.css';

export default function ErrorMessage({ message }) {
  return (
    <div className={styles.error}>
      <p>{message}</p>
    </div>
  );
}
