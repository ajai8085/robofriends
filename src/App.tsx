import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import { robots } from './roborts';

class App extends Component {


  state = {
    roborts: robots,
    searchField: ''
  };

  onSearchChanges = (event: any) => {
    this.setState({ searchField: event.target.value })
  }

  render(): React.ReactNode {

    const filteredRobots = this.state.roborts.filter(r => {
      return r.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className="App">

        <h1>Robo Fridnds</h1>
        <SearchBox searchChanges={this.onSearchChanges} />
        <CardList roborts={filteredRobots} />

      </div>
    );
  }
}


export default App;
