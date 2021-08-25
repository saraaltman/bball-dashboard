import React, { Component } from 'react';
import { Container, Grid, Table, TableHead, TableRow, TableCell, TableBody, Button, Checkbox } from '@material-ui/core';

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
            <Container>
                <Grid>
                    <Navigation></Navigation>
                </Grid>
                <Grid>
                    <br/>
                    <div class="header1">
                        <h1> {`${this.state.teamName} Dashboard`} </h1>&nbsp;&nbsp;<Button onClick={() => this.openEditTeamName()} class="edit"><i className="fa fa-lg fa-edit"></i></Button>
                        <EditTeamNameModal isOpen={this.state.openEditTeamName} onClose={this.closeEditTeamName} name={this.state.teamName}></EditTeamNameModal>
                    </div>

                </Grid>
                <Grid>
                    <Button variant="contained" onClick={() => this.openAdd()}>Add a Player</Button>&nbsp;&nbsp;<Button variant="contained">Remove Players</Button>
                    <AddPlayerModal isOpen={this.state.addOpen} onClose={this.closeAdd} addPlayer={() => this.addPlayer()}></AddPlayerModal>
                </Grid>
                <Grid>
                    <br/>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>Player</TableCell>
                                <TableCell>Team</TableCell>
                                <TableCell>Position</TableCell>
                                <TableCell>Height</TableCell>
                                <TableCell>Weight</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.team.map((p) =>
                                <TableRow>
                                    <TableCell><Checkbox></Checkbox></TableCell>
                                    <TableCell>{p.firstName} {p.lastName}</TableCell>
                                    <TableCell>{TEAM_MAP[p.team_id]}</TableCell>
                                    <TableCell>{p.position}</TableCell>
                                    <TableCell>{p.height_feet}' {p.height_inches}"</TableCell>
                                    <TableCell>{p.weight_pounds} lbs.</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </Grid>
            </Container >
        )
    }

    openAdd = () => this.setState({ addOpen: true });
    closeAdd = () => {
        this.setState({ addOpen: false });
        this.loadTeam();
    }

    openEditTeamName = () => this.setState({ openEditTeamName: true});
    closeEditTeamName = (name) => {
        this.setState({openEditTeamName: false, teamName: name });
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