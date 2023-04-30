import React from 'react';
import styles from './styles.module.scss';

export default function Home() {
  return (
    <div>
      <label className={styles['hamburger-menu']}>
        <input type="checkbox" />
      </label>
      <aside className={styles.sidebar}>
        <nav>
          <div>This</div>
          <div>Is</div>
          <div>The</div>
          <div>Sidebar</div>
        </nav>
      </aside>
    </div>
  );
}
