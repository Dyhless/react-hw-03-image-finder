import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Input, SearchButton, SearchForm } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    searchText: '',
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { value } = event.target.elements.searchText;
    this.props.onSubmit(value.trim());
    event.target.reset();
  };

  render() {
    return (
      <header className="searchbar">
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <span>Search</span>
          </SearchButton>

          <Input
            className="searchText"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </SearchForm>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
