import React from 'react';
import SearchBar from './searchBar/SearchBar.js';
import { ImageGallery } from './imageGallery/ImageGallery.js';
import styles from './styles.module.css';
import { Spinner } from './loader/Loader.js';
import { Button } from './button/Button';
import { Modal } from './modal/Modal.js';
import axios from 'axios';

const API_KEY = '17949255-e1d9ea9bdf94a67d1d5d88a2d';

export default class App extends React.Component {
  state = {
    images: [],
    search: '',
    loading: false,
    showModal: false,
    originalImageURL: '',
    page: 1,
    error: null,
  };

  componentDidMount() {
    if (this.state.search) {
      this.getImages(this.state.search);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.search;
    const nextQuery = this.state.search;
    if (prevQuery !== nextQuery) {
      this.getImages(nextQuery);
    }
  }

  getImages = () => {
    this.setState({ loading: true });
    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.search}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          loading: false,
          page: prevState.page + 1,
        }));
      })
      .finally(() => {
        this.setState({ loading: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  };
  getSearch = search => {
    this.setState({ search, images: [], page: 1 });
  };

  toggleModal = () => {
    this.setState(({ ShowModal }) => ({ showModal: !ShowModal }));
  };

  hiddenModal = () => {
    this.setState({ showModal: false });
  };

  fetchImages = url => {
    this.setState({ originalImageURL: url });
  };

  render() {
    const { originalImageURL, images, showModal, loading } = this.state;
    return (
      <div className={styles.App}>
        <SearchBar onSubmit={this.getSearch} />
        <ImageGallery
          fetchImages={this.fetchImages}
          toggleModal={this.toggleModal}
          images={images}
        />
        {loading && <Spinner />}
        {images.length > 0 && !loading && <Button getImages={this.getImages} />}
        {showModal && (
          <Modal
            hiddenModal={this.hiddenModal}
            largeImageURL={originalImageURL}
          />
        )}
      </div>
    );
  }
}
