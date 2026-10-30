import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello, GitHub Actions! 🚀</h1>
      <p>
        This simple Next.js app is a playground for practicing GitHub Actions
        workflows.
      </p>
      <ul className={styles.list}>
        <li>Build and deploy with GitHub Actions</li>
        <li>Lint, format, and typecheck</li>
        <li>Run unit and end-to-end tests</li>
      </ul>
    </main>
  );
}
