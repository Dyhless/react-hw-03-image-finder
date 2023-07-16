import React, { Component } from 'react';

import * as SearchBar from './Searchbar/Searchbar';
import {
  Button,
  ImageGallery,
  ImageGalleryItem,
  Loader,
  Modal,
  Searchbar,
} from 'components';

export class App extends Component {
  render() {
    return (
      <>
        <Searchbar class="searchbar">
          <form class="form">
            <button type="submit" class="button">
              <span class="button-label">Search</span>
            </button>

            <input
              class="input"
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
            />
          </form>
        </Searchbar>

        <ImageGallery class="gallery">
          <ImageGalleryItem class="gallery-item">
            <img src="" alt="" />
          </ImageGalleryItem>
        </ImageGallery>

        <Button>Load more</Button>

        <div class="overlay">
          <Modal class="modal">
            <img src="" alt="" />
          </Modal>
        </div>
      </>
    );
  }
}
