import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '', location: '' };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleTermChange(ev) {
    this.setState({ term: ev.target.value });
  }

  handleLocationChange(ev) {
    this.setState({ location: ev.target.value });
  }

  handleSearch(ev) {
    this.props.searchYelp(this.state.term, this.state.location);
    ev.preventDefault();
  }

  render() {
    return (
      <div className='SearchBar'>
        <div className='SearchBar-fields'>
          <input
            onChange={this.handleTermChange}
            placeholder='Search Category'
          />
          <input
            onChange={this.handleLocationChange}
            placeholder='Which State?'
          />
        </div>
        <div className='SearchBar-submit' onClick={this.handleSearch}>
          <a>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
