import React, { Component } from 'react';
import './App.css';
import CardsList from './components/CardsList/CardsList';
import Scroll from './components/Scroll/Scroll';
import SearchBox from './components/SearchBox/SearchBox';

class App extends Component {
  constructor(){
    super();
    this.state={
      robots: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=> this.setState({ robots: users }))
  }

  onSearchChange = (e) => {
    this.setState({
      searchField: e.target.value
    })
  }
  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot=>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return !robots.length ?
        <div>Loading...</div>
      : (
        <div className="tc">
          <h1 className="f1">robot me</h1>
          <SearchBox
            searchChange={this.onSearchChange}
          />
          <Scroll>
            <CardsList
              robots={filteredRobots}
            />
          </Scroll>
        </div>
      )
  }
}

export default App;