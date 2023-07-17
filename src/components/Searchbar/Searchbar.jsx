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
    const value = event.target.searchText.value.trim();
    this.props.onSubmit(value);
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
            name="searchText"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleChange}
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
