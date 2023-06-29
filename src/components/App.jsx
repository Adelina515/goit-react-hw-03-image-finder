import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import * as API from 'services/PixabayApi';
import ImageGallery from './ImageGallery/ImageGallery';
import Style from 'components/App.module.css';
import Button from './Button/Button';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    searchJmg: '',
    isLoading: false,
    images: [],
    error: '',
    currentPage: 1,
    totalPages: 0,
  };
  componentDidUpdate(_, prevState) {
    if (
      prevState.searchJmg !== this.state.searchJmg ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.dataImg();
    }
  }
  onClickMore() {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  }
  dataImg = async () => {
    const { searchJmg, currentPage } = this.state;
    try {
      this.setState({ isLoading: true });
      const data = await API.fetchImg(searchJmg, currentPage);
      if (data.hits.length === 0) {
        return alert('hmm.. images not found');
      }
      console.log(data);
      const normalizedImages = API.normalizedImages(data.hits);
      this.setState({
        isLoading: false,
        images: [...this.state.images, ...normalizedImages],
        error: '',
        totalPages: Math.ceil(data.totalHits / 12),
      });
    } catch (error) {
      this.setState({
        error: 'Something went wrong. Please, try starting it again.',
      });
    }
  };

  onSubmit = qwe => {
    this.setState({
      searchJmg: qwe,
      images: [],
      currentPage: 1,
    });
  };

  render() {
    const { images, currentPage, isLoading, totalPages } = this.state;
    return (
      <div className={Style.app}>
        <Searchbar onSubmit={this.onSubmit} />
        {images.length > 0 ? (
          <ImageGallery images={images} />
        ) : (
          !isLoading && <p className={Style.noFound}>No images found</p>
        )}
        {images.length > 0 && !isLoading && totalPages !== currentPage && (
          <Button onClick={this.onClickMore} />
        )}
        {isLoading && <Loader />}
      </div>
    );
  }
}
