import React, { Component } from 'react';
import { Container, Grid, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core';

import AddPlayerModal from './AddPlayerModal';
import APIClient from '../APIClient';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: [],
            addOpen: false
        }
    }

    componentDidMount() {
        this.loadTeam();
    }

    render() {
        return (
            <Container>
                <Grid>
                    <h1>Team Dashboard</h1>
                </Grid>
                <Grid>
                    <Button color="primary" onClick={() => this.openAdd()}>Add a Player</Button>&nbsp;&nbsp;<Button color="primary">Remove a Player</Button>
                    <AddPlayerModal isOpen={this.state.addOpen} onClose={this.closeAdd} addPlayer={() => this.addPlayer()}></AddPlayerModal>
                </Grid>
                <Grid>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Player</TableCell>
                                <TableCell>Team</TableCell>
                                <TableCell>Position</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.team.map((p) =>
                                <TableRow>
                                    <TableCell> {p.firstName} {p.lastName}</TableCell>
                                    <TableCell>{p.team}</TableCell>
                                    <TableCell>{p.position}</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </Grid>
            </Container>
        )
    }

    openAdd = () => this.setState({ addOpen: true });
    closeAdd = () => {
        this.setState({ addOpen: false });
        this.loadTeam();
    }

    loadTeam() {
        APIClient.getTeam().then(response => {
            console.log(response);
            let t = response;
            this.setState({ team: t ? t : [] });
        }).catch(() => {
            console.log("Error Loading Players");
        });
    }

    addPlayer(player) {
        // call add player api
    }
}