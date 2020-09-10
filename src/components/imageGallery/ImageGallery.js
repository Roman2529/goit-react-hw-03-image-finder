import React from 'react';
import { ImageGalleryItem } from '../imageGalleryItem/ImageGalleryItem.js';
import PropTypes, { object } from 'prop-types';
import styles from '../styles.module.css';

export function ImageGallery({ fetchImages, images, toggleModal }) {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(img => (
        <ImageGalleryItem
          fetchImages={fetchImages}
          toggleModal={toggleModal}
          imageObj={img}
          key={img.id}
        />
      ))}
    </ul>
  );
}
export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(object).isRequired,
};
