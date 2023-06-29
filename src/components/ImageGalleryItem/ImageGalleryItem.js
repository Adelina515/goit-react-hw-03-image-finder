import Style from 'components/ImageGalleryItem/ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';
import { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  static propTypes = {
    image: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
  };
  state = {
    isShow: false,
  };
  handleModal = () => {
    this.setState(({ isShow }) => ({ isShow: !isShow }));
  };
  render() {
    const { isShow } = this.state;
    const { image } = this.props;
    return (
      <>
        <li className={Style.galleryItem}>
          <img
            src={image.webformatURL}
            alt={image.tags}
            className={Style.galleryItemImage}
            onClick={this.handleModal}
          />
        </li>
        {isShow && (
          <Modal
            onClose={this.handleModal}
            largeImageURL={image.largeImageURL}
            tags={image.tags}
          />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
