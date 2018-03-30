import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

export default class App extends Component {
  state = { robots, searchInput: '' };

  onSearchChange = event => {
    this.setState({ searchInput: event.target.value });
  };

  render() {
    const { robots, searchInput } = this.state;
    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return (
      <div className="tc">
        <h1 className="ma0 pa3 f1 yellow">RoboFriends</h1>
        <SearchBox input={searchInput} onChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}
