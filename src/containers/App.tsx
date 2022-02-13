import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import { IRobort } from '../roborts';
import ErrorBoundary from './ErrorBoundary';


const App = () => {

  const [robots, setRobots] = useState(null);
  const [searchField, setsearchField] = useState('');

  // when should we run our sideeffect (component did mount)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => {
      if (!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json();
    }).then(users => {
      setRobots(users);
      console.log('loaded data');
    });
  }, []) // component did mount 

  const onSearchChanges = (event: any) => {
    setsearchField(event.target.value);
  }
  const robs = (robots || new Array<IRobort>());


  const filteredRobots = robs.filter(r => {
    return r.name.toLowerCase().includes(searchField.toLowerCase());
  });



  return robs ? (
    <div className="App">

      <h1 className='f1'>Robo Friends!</h1>
      <SearchBox searchChanges={onSearchChanges} />
      <Scroll>
        <ErrorBoundary>
          <CardList roborts={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  ) : (<h1>Loading .... </h1>);


}


export default App;
