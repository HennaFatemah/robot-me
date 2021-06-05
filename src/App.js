import React, { Component } from 'react';
import './App.css';
import CardsList from './components/CardsList/CardsList';
import { robots } from './robots'
import SearchBox from './components/SearchBox/SearchBox';

class App extends Component {
  constructor(){
    super();
    this.state={
      robots: robots,
      searchField: ''
    }
  }

  onSearchChange = (e) => {
    this.setState({
      searchField: e.target.value
    })
  }
  render() {
    const filteredRobots = this.state.robots.filter(robot=>{
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    return (
      <div className="tc">
        <h1>Robot Me</h1>
        <SearchBox
          searchChange={this.onSearchChange}
        />
        <CardsList
          robots={filteredRobots}
        />
      </div>
    );
  }
}

export default App;