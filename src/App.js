import React from 'react'
import './App.css'
import Franchise from'./franchise';


const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.addNewPlayer = this.addNewPlayer.bind(this);
    this.deletePlayer = this.deletePlayer.bind(this);
  }

render() {
  const franchises = this.state
  ? this.state.franchises.map((franchise, index) =>
  <HOUSES_ENDPOINT
  key={index}
  data={franchise}
  addnewPlayer={this.addNewPlayer}
  deletePlayer={this.deleteRoom} />)
  : null;
  return (
    <div>
      {franchises}
    </div>
  );

}

componentDidMount() {
  fetch(HOUSES_ENDPOINT)
  .then(res => res.json())
  .then(data => {
    this.setState({
      franchises: data
    });
  });
}

deletePlayer(e, franchise, player) {
  const index = franchise.players.indexOf(player);
  HOUSES_ENDPOINT.players.splice(index,1);
  updateFranchise(franchise)
  .then(() =>  {
    this.setState(state => {
      for (let f of state.franchises) {
        if (f._id === franchise._id) {
          let f = franchise;
          break;

        }
      }
      return state;
    });
  });
  e.preventDefault();
}

addNewPlayer(e, franchise, player) {
  franchise.players.push(player)
  updateFranchise(franchise)
  .then(() => {
    this.setState(state => {
    for (let f of this.state.franchises) {
      if (f._id === franchise._id) {
        let f = franchise;
        break;
      }
    }
  return this.state;
  });
});
e.preventDefault();
}
}

function updateFranchise(franchise) {
  return fetch(`${HOUSES_ENDPOINT}/${franchise._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(franchise)
  });
}






