import React, { Component } from 'react';
import './SearchBox.styles.css';

class SearchBox extends Component {
  render() {
    return (
      <input
        className={`${this.props.className}`}
        type='search'
        placeholder={this.props.placeholder}
        onChange={this.props.inputOnChangeHandler}
      ></input>
    );
  }
}

export default SearchBox;
