import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import { IRobort } from '../roborts';
import ErrorBoundary from './ErrorBoundary';




class App extends Component {


  state = {
    robots: null,
    searchField: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => {

      if (!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json();
    }).then(users => {
      this.setState({ robots: users });
    });
  }

  onSearchChanges = (event: any) => {
    this.setState({ searchField: event.target.value })
  }

  render(): React.ReactNode {

    const { robots, searchField } = this.state;
    const robs = (robots || new Array<IRobort>());

    const filteredRobots = robs.filter(r => {
      return r.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return robs ? (
      <div className="App">

        <h1 className='f1'>Robo Friends!</h1>
        <SearchBox searchChanges={this.onSearchChanges} />
        <Scroll>
          <ErrorBoundary>
            <CardList roborts={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    ) : (<h1>Loading .... </h1>);

  }
}


export default App;
