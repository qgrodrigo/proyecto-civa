import styles from './MainLayout.module.css';
import { Link } from 'react-router-dom';

export default function MainLayout({ children }) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}><strong>CIVA</strong> Buses</Link>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>© 2025 Civa Frontend</p>
      </footer>
    </div>
  );
}
