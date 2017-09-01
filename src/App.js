import React, { Component } from 'react';
import './App.css';
import './initialTeamBuild.js';
import Buildteam from './Buildteam'
class App extends Component {
      constructor(){
      super();
      this.state={
        teamUnassigned: [
          {
            name: 'Markus Beamer',
            team: 'unassigned'
          },
          {
            name: 'Ian Powell',
            team: 'unassigned'
          },
          {
            name: 'Micky Hernendez',
            team: 'unassigned'
          }
        ],
        team1: [],
        team2: []
      };
    }

  render() {
    return (
      <div id="App">
        <Buildteam 
        teamID="team1"
        teamArray={this.state.team1} 
        />
        <Buildteam 
        teamID="teamUnassigned"
        teamArray={this.state.teamUnassigned} 
        />
        <Buildteam 
        teamID="team2"
        teamArray={this.state.team2} 
        />
      </div>
    );
  }
}

export default App;
