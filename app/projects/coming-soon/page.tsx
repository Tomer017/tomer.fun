import Link from 'next/link';
import styles from './page.module.css';

export default function ComingSoon() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Coming Soon</h1>
        <p className={styles.description}>
          This interactive experience is currently under development.
        </p>
        <p className={styles.description}>
          Check back soon for an exciting new addition to tomer.fun!
        </p>
        <Link href="/" className={styles.backLink}>
          &larr; Back to Home
        </Link>
      </div>
    </main>
  );
} 