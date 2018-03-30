import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

export default class App extends Component {
  state = { robots, searchInput: '' };

  onSearchChange = event => {
    this.setState({ searchInput: event.target.value }, () => {
      const filteredRobots = this.state.robots.filter(robot =>
        robot.name.toLowerCase().includes(this.state.searchInput)
      );
      this.setState({ robots: filteredRobots });
    });
  };

  render() {
    return (
      <div className="tc bg bg-red">
        <h1 className="ma0 pa3 f1 yellow">RoboFriends</h1>
        <SearchBox
          input={this.state.searchInput}
          onChange={this.onSearchChange}
        />
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}
