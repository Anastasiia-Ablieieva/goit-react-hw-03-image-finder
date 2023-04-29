import { Component } from 'react';
import { Modal } from '../Modal/Modal';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = {
    openModal: false,
  };

  toggleModal = e => {
    this.setState(prevState => ({ openModal: !prevState.openModal }));
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;
    return (
      <li className={css.galleryItem}>
        <img
          className={css.galleryItemImage}
          onClick={this.toggleModal}
          src={webformatURL}
          alt={tags}
        />
        {this.state.openModal && (
          <Modal largeImageURL={largeImageURL} closeModal={this.toggleModal} />
        )}
      </li>
    );
  }
}

