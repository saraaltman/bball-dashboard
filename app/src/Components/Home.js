import React, { Component } from 'react';
import { Table, Container, Row, Button, Input } from 'reactstrap';

import AddPlayerModal from './team/AddPlayerModal';
import APIClient from '../APIClient';
import Navigation from './Navigation';
import EditTeamNameModal from './team/EditTeamNameModal';

import './Home.css';
import PlayerTable from './shared/PlayerTable/PlayerTable';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: [],
            teamStats: [],
            addOpen: false,
            openEditTeamName: false,
            teamName: "Team",
            loaded1: false,
            loaded2: false
        }
    }

    componentDidMount() {
        this.loadStats();
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
                        <h1 className="headerTitle"> {`${this.state.teamName} Dashboard`}</h1>&nbsp;&nbsp;
                        <Button onClick={() => this.openEditTeamName()} className="headerButtons"><i className="fa fa-lg fa-edit"></i></Button>&nbsp;
                        <Button onClick={() => this.openAdd()} className="headerButtons"><i className="fa fa-lg fa-user-plus"></i></Button>&nbsp;
                        <Button className="headerButtons"><i className="fa fa-lg fa-trash"></i></Button>
                        <EditTeamNameModal isOpen={this.state.openEditTeamName} onClose={this.closeEditTeamName} name={this.state.teamName}></EditTeamNameModal>
                        <AddPlayerModal isOpen={this.state.addOpen} onClose={this.closeAdd} addPlayer={() => this.addPlayer()}></AddPlayerModal>
                    </div>
                    {this.state.loaded1 && this.state.loaded2 && this.state.team.length !== 0 &&
                        <PlayerTable team={this.state.team} teamStats={this.state.teamStats}></PlayerTable>}
                    {this.state.loaded1 && this.state.loaded2 && this.state.team.length === 0 &&
                        <h4>
                            Add Players to your team to see their stats displayed here
                        </h4>}
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
            this.setState({ team: t, loaded1: true });
        }).catch(() => {
            console.log("Error Loading Players");
        });
    }

    loadStats() {
        APIClient.getTeamStats().then(response => {
            let s = response.stats;
            this.setState({ teamStats: s, loaded2: true });
        }).catch(() => {
            console.log("Error Loading Player Stats");
        });
    }

}