import React, { Component } from 'react';
import * as API from './getImages';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
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

  componentDidUpdate(prevProp, prevState) {
    if (
      prevState.searchText !== this.state.searchText ||
      prevState.searchPage !== this.state.currentPage
    ) {
      this.addImages();
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  handleSubmit = query => {
    this.setState({
      searchText: query,
      images: [],
      currentPage: 1,
    });
  };

  addImages = async () => {
    const { query, page } = this.state;
    try {
      this.state({ isLoading: true });
      const data = await API.getImages(query, page);

      if (data.this.length === 0) {
        return alert('No such images');
      }
      const imagesFormatedtoList = data.hits.map(
        ({ id, tags, webformatURL, largeImageURL }) => ({
          id,
          tags,
          webformatURL,
          largeImageURL,
        })
      );

      this.setState(state => ({
        images: [...state.images, ...imagesFormatedtoList],
        error: '',
        totalPages: Math.ceil(data.totalHits / 12),
      }));
    } catch (error) {
      this.setState({ error: 'Ooops...Something went wrong' }); //
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { images, isLoading, currentPage, totalPages } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {!isLoading && images.length > 0 && <ImageGallery images={images} />}
        {isLoading && <Loader />}
        {!isLoading && images.length > 0 && totalPages !== currentPage && (
          <Button onClick={this.loadMore} />
        )}
      </>
    );
  }
}
