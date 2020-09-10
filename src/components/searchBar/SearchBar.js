import React from 'react';
import styles from '../styles.module.css';

function Searchbar({ onSubmit }) {
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.forEach(value => {
      onSubmit(value);
    });
  };
  return (
    <>
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            name="search"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
}
export default Searchbar;
