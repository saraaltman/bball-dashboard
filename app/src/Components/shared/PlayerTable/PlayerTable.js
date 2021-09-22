import React, { Component } from 'react';

import TEAM_MAP from '../../../models/TeamMap';

import './PlayerTable.css'

export default class PlayerTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            team: this.props.team,
            teamStats: this.props.teamStats,
        }
    }

    render() {
        return (
            <table className="table">
                <thead className="header">
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Team</th>
                        <th>Position</th>
                        <th>FPPG</th>
                        <th>PPG</th>
                        <th>REB</th>
                        <th>STL</th>
                        <th>BLK</th>
                        <th>AST</th>
                        <th>MIN</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.team.map((p, s) =>
                        <tr onClick="onClick(p.id)" className="bodyRow" key={p.id}>
                            <td></td>
                            <td><a href={`/${p.id}`}>{p.firstName} {p.lastName}</a></td>
                            <td>{TEAM_MAP[p.team_id]}</td>
                            <td>{p.position}</td>
                            <td>{this.state.teamStats[s].fantasy_points_per_game}</td>
                            <td>{this.state.teamStats[s].points_per_game}</td>
                            <td>{this.state.teamStats[s].rebounds}</td>
                            <td>{this.state.teamStats[s].steals}</td>
                            <td>{this.state.teamStats[s].blocks}</td>
                            <td>{this.state.teamStats[s].turnovers}</td>
                            <td>{Math.round(this.state.teamStats[s].avg_minutes_game)}</td>
                        </tr>
                    )}
                </tbody>
            </table>

        )
    }
}