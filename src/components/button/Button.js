import React from 'react';
import styles from '../styles.module.css';

export function Button({ getImages }) {
  return (
    <div className={styles.ButtonNew}>
      <button className={styles.Button} onClick={getImages}>
        Load more
      </button>
    </div>
  );
}
