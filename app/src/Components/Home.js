import React, { Component } from 'react';
import { Table, Container, Row, Button, Input } from 'reactstrap';

import AddPlayerModal from './team/AddPlayerModal';
import APIClient from '../APIClient';
import Navigation from './Navigation';
import EditTeamNameModal from './team/EditTeamNameModal';
import TEAM_MAP from '../models/TeamMap';

import './Home.css';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: [],
            addOpen: false,
            openEditTeamName: false,
            teamName: "Team"
        }
    }

    componentDidMount() {
        this.loadTeam();
    }

    render() {
        return (
            <Container className="main">
                <Row>
                    <Navigation></Navigation>
                </Row>
                <br />
                <br />
                <Container className="content">
                    <br />
                    <div className="header1">
                        <h1> {`${this.state.teamName} Dashboard`}</h1>&nbsp;&nbsp;
                        <Button onClick={() => this.openEditTeamName()} className="headerButtons"><i className="fa fa-lg fa-edit"></i></Button>&nbsp;
                        <Button onClick={() => this.openAdd()} className="headerButtons"><i className="fa fa-lg fa-user-plus"></i></Button>&nbsp;
                        <Button className="headerButtons"><i className="fa fa-lg fa-trash"></i></Button>
                        <EditTeamNameModal isOpen={this.state.openEditTeamName} onClose={this.closeEditTeamName} name={this.state.teamName}></EditTeamNameModal>
                        <AddPlayerModal isOpen={this.state.addOpen} onClose={this.closeAdd} addPlayer={() => this.addPlayer()}></AddPlayerModal>
                    </div>
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
                            {this.state.team.map((p) =>
                                <tr className="bodyRow">
                                    <th><Input type="checkbox"/></th>
                                    <th><a href={`/${p.firstName}-${p.lastName}`}>{p.firstName} {p.lastName}</a></th>
                                    <th>{TEAM_MAP[p.team_id]}</th>
                                    <th>{p.position}</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Container>
            </Container>
        )
    }

    openAdd = () => this.setState({ addOpen: true });
    closeAdd = () => {
        this.setState({ addOpen: false });
        this.loadTeam();
    }

    openEditTeamName = () => this.setState({ openEditTeamName: true });
    closeEditTeamName = (name) => {
        this.setState({ openEditTeamName: false, teamName: name });
    }

    loadTeam() {
        APIClient.getTeam().then(response => {
            let t = response.team;
            this.setState({ team: t ? t : [] });
        }).catch(() => {
            console.log("Error Loading Players");
        });
    }

}