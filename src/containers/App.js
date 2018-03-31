import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

export default class App extends Component {
  state = { robots: [], searchInput: '' };

  onSearchChange = event => {
    this.setState({ searchInput: event.target.value });
  };

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(robots => this.setState({ robots }));
  }

  render() {
    const { robots, searchInput } = this.state;
    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return !robots.length ? (
      <h1 className="ma0 pa3 f1 lh-title yellow">Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="ma0 pa3 f1 lh-title yellow">Robo Friends</h1>
        <SearchBox input={searchInput} onChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}
