import { Component } from 'react';
import { searchImages } from '../api/api';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    totalHits: 0,
    error: null,
    onClick: false,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getImages();
    }
  }

  getImages = async () => {
    const { query, page } = this.state;
    try {
      this.setState({ isLoading: true });
      const { images, totalHits } = await searchImages(query, page);
      if (!images.length) {
        this.setState({ error: 'There are no images matching your request...' });
        return;
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        error: '',
        totalHits,
      }));
    } catch (error) {
      this.setState({ error: ' 😫Oops... Something went wrong, try again' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  getQuery = query => {
    this.setState({
      query,
      page: 1,
      images: [],
      totalHits: 0,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, isLoading, error, totalHits } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.getQuery} />
        {images.length !== 0 && (
          <ImageGallery images={images} onClick={this.onClick} />
        )}
        {error && <p>{error}</p>}
        {!isLoading && totalHits !== images.length && (
        <Button type="button" onClick={this.loadMore} />
        )}
        {isLoading && <Loader />}
      </div>
    );
  }
}