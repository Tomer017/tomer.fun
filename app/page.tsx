import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Tomer.fun</h1>
        <p className={styles.description}>
          A collection of interactive web experiences inspired by neal.fun
        </p>
        
        <div className={styles.grid}>
          <Link href="/projects/coming-soon" className={styles.card}>
            <h2>Coming Soon &rarr;</h2>
            <p>Our first interactive experience is in development.</p>
          </Link>
        </div>
      </div>
    </main>
  );
} 