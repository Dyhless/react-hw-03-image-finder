import { Component, createRef } from 'react';
import * as API from './getImages';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    value: '',
    images: [],
    page: 1,
    isLoading: false,
    totalPages: 0,
  };

  loadMoreButtonRef = createRef();

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.value !== this.state.value ||
      prevState.page !== this.state.page
    ) {
      this.addImages();
    }
  }

  loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
      }),
      () => {
        this.addImages();
        this.scrollDown();
      }
    );
  };

  scrollDown = () => {
    this.loadMoreButtonRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  };

  handleSubmit = query => {
    this.setState({
      value: query,
      images: [],
      page: 1,
      isLoading: true,
      totalPages: 0,
    });
  };

  addImages = async () => {
    const { value, page } = this.state;
    try {
      const data = await API.getImages(value, page);

      if (data.hits.length === 0) {
        return alert('No such images');
      }
      const imagesFormattedToList = data.hits.map(
        ({ id, tags, webformatURL, largeImageURL }) => ({
          id,
          tags,
          webformatURL,
          largeImageURL,
        })
      );

      this.setState(state => ({
        images: [...state.images, ...imagesFormattedToList],
        isLoading: false,
        totalPages: Math.ceil(data.totalHits / 12),
      }));
    } catch (error) {
      this.setState({
        error: 'Ooops... Something went wrong',
        isLoading: false,
      });
    }
  };

  render() {
    const { images, isLoading, totalPages, page } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {images.length > 0 && <ImageGallery images={images} />}
        {isLoading && <Loader />}
        {totalPages > page && (
          <div ref={this.loadMoreButtonRef}>
            <Button onClick={this.loadMore} />
          </div>
        )}
      </>
    );
  }
}
