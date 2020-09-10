import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

export function ImageGalleryItem({ fetchImages, toggleModal, imageObj }) {
  console.log(imageObj);
  const handleClick = () => {
    toggleModal();
    fetchImages(imageObj.webformatURL);
  };
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        onClick={handleClick}
        src={imageObj.webformatURL}
        alt="GalleryImage"
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
}

ImageGalleryItem.ropTypes = {
  imageObj: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
  fetchImages: PropTypes.func.isRequired,
};
