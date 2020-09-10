import React from 'react';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import styles from '../styles.module.css';
export function Spinner() {
  return (
    <div className={styles.ButtonNew}>
      <Loader type="Rings" color="#00BFFF" height={100} width={100} />
    </div>
  );
}
