import React from 'react';
import "./style.css";
import NewPlayerForm from './new-player-form';

export default class Franchise extends React.Component {
    render() {
        const players = this.props.data.players
        ? this.props.data.players.map((player, index) =>
        <li key = {index}>
            {player.team} Name: {player.name} Salary: {player.salary} Position: {player.position}
            <button onClick = {e =>
            this.props.deletePlayer(e, this.props.data, player)
            }>Delete</button>
        </li>)
        : null;
        return (
            <div>
                <h1>{this.props.data.name}</h1>
                <ul>
                    {players}
                </ul>
                <NewPlayerForm
                addNewPlayer={this.props.addNewPlayer} data={this.props.data} />
                </div>
        );
    }
}