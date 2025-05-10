import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>© {new Date().getFullYear()} Tomer.fun</p>
        <p>Inspired by <a href="https://neal.fun" target="_blank" rel="noopener noreferrer">neal.fun</a></p>
      </div>
    </footer>
  );
} 