import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';
import Scroll from './components/Scroll';
import SearchBox from './components/SearchBox';
import { IRobort } from './roborts';




class App extends Component {


  state = {
    roborts: null,
    searchField: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => {

      if (!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json();
    }).then(users => {
      this.setState({ roborts: users });
    });
  }

  onSearchChanges = (event: any) => {
    this.setState({ searchField: event.target.value })
  }

  render(): React.ReactNode {

    const robs = (this.state.roborts || new Array<IRobort>());
    const filteredRobots = robs.filter(r => {
      return r.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });

    if (robs.length <= 0) {
      return (<h1>Loading .... </h1>);
    } else {
      return (
        <div className="App">

          <h1 className='f1'>Robo Fridnds</h1>
          <SearchBox searchChanges={this.onSearchChanges} />
          <Scroll>
            <CardList roborts={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}


export default App;
