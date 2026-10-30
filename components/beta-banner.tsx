import styles from './beta-banner.module.css';

export default function BetaBanner() {
  return (
    <aside className={styles.banner}>
      🧪 <strong>beta_banner</strong> is ON — this banner is gated by a
      server-side flag.
    </aside>
  );
}
