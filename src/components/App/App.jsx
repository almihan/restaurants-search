import React from 'react';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';
import { Search } from '../../util/Search';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: [],
    };

    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location) {
    const businesses = Search(term, location);
    this.setState({ businesses });
  }
  render() {
    return (
      <div className='App'>
        <h1>Restaurants Search</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
