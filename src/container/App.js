import React, { Component } from 'react';
import './App.css';
import CardsList from '../components/CardsList/CardsList';
import Scroll from '../components/Scroll/Scroll';
import SearchBox from '../components/SearchBox/SearchBox';
import { connect } from 'react-redux';
import { requestRobots, setSearchField } from '../actions/actions';

const mapStateToProps = state => {
  return{
    searchField: state.searchRobots.searchField,
    isPending: state.requestRobots.isPending,
    robots: state.requestRobots.robots,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  componentDidMount(){
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot=>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending ?
        <div>Loading...</div>
      : (
        <div className="tc">
          <h1 className="f1">robot me</h1>
          <SearchBox
            searchChange={onSearchChange}
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

export default connect(mapStateToProps, mapDispatchToProps)(App);