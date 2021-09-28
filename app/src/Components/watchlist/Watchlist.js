import React, { Component } from 'react';
import Navigation from '../shared/Navigation/Navigation';
import { Table, Container, Row, Button, Input } from 'reactstrap';

import TEAM_MAP from '../../models/TeamMap';
import './Watchlist.css';

export default class Watchlist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            watchList: []
        }
    }

    render() {
        return (
            <Container className="main">
                <Navigation></Navigation>
                <br />
                <br />
                <Container className="content">
                    <br />
                    <div className="header1">
                        <h1 className="watchList" >WatchList</h1>&nbsp;&nbsp;
                        <Button onClick={() => this.openEditTeamName()} className="headerButtons"><i className="fa fa-lg fa-edit"></i></Button>&nbsp;
                        <Button onClick={() => this.openAdd()} className="headerButtons"><i className="fa fa-lg fa-user-plus"></i></Button>&nbsp;
                        <Button className="headerButtons"><i className="fa fa-lg fa-trash"></i></Button>
                    </div>
                    {this.state.watchList.length !== 0 &&
                        <Table>
                            <thead>
                                <tr className="headerRow">
                                    <th></th>
                                    <th>PLAYER</th>
                                    <th>TEAM</th>
                                    <th>POSITION</th>
                                    <th>FPPG</th>
                                    <th>PPG</th>
                                    <th>REB</th>
                                    <th>STL</th>
                                    <th>BLOCKS</th>
                                    <th>TO</th>
                                    <th>MINUTES</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {this.state.team.map((p, s) =>
                                    <tr className="bodyRow" key={p.id}>
                                        <th><Input type="checkbox" /></th>
                                        <th><a href={`/${p.id}`}>{p.firstName} {p.lastName}</a></th>
                                        <th>{TEAM_MAP[p.team_id]}</th>
                                        <th>{p.position}</th>
                                        <th>{this.state.teamStats[s].fantasy_points_per_game}</th>
                                        <th>{this.state.teamStats[s].points_per_game}</th>
                                        <th>{this.state.teamStats[s].rebounds}</th>
                                        <th>{this.state.teamStats[s].steals}</th>
                                        <th>{this.state.teamStats[s].blocks}</th>
                                        <th>{this.state.teamStats[s].turnovers}</th>
                                        <th>{Math.round(this.state.teamStats[s].avg_minutes_game)}</th>
                                    </tr>
                                )} */}
                            </tbody>
                        </Table>}
                    {this.state.watchList.length === 0 &&
                        <h4>
                            Add Players to your watchlist to see their stats displayed here
                        </h4>}
                </Container>
            </Container>
        )
    }
}