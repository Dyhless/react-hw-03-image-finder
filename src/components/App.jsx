import { Component } from 'react';
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
    isLoadMoreBtnVisible: false,
    isLoading: false,
    isModalVisible: false,
    dataForModal: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.value !== this.state.value ||
      prevState.page !== this.state.page
    ) {
      this.addImages();
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleSubmit = query => {
    this.setState({
      value: query,
      images: [],
      page: 1,
    });
  };

  addImages = async () => {
    const { value, page } = this.state;
    try {
      this.setState({ isLoading: true });
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
        error: '',
        totalPages: Math.ceil(data.totalHits / 12),
      }));
    } catch (error) {
      this.setState({ error: 'Ooops...Something went wrong' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { images, isLoading, page, totalPages } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {!isLoading && images.length > 0 && <ImageGallery images={images} />}
        {isLoading && <Loader />}
        {!isLoading && images.length > 0 && totalPages > page && (
          <Button onClick={this.loadMore} />
        )}
      </>
    );
  }
}
