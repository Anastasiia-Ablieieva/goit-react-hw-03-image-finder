import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscape);
  }

  onEscape = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };
  onClose = event => {
    if (event.currentTarget !== event.target) {
      this.props.closeModal();
    }
  };

  onOverlay = event => {
    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className={css.overlay} onClick={this.onOverlay}>
        <div className={css.modal}>
          <img
            className={css.img}
            src={this.props.largeImageURL}
            alt="largeImageURL"
          />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};