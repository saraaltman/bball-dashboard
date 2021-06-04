import React, { Component } from 'react';
import { Container, Grid, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core';
import axios from 'axios';

import AddPlayerModal from './AddPlayerModal';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: [],
            ids: [],
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
                                <>
                                    <TableCell> {p.firstName} {p.lastName}</TableCell>
                                    <TableCell>{p.team}</TableCell>
                                    <TableCell>{p.position}</TableCell>
                                </>
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
        console.log(this.state.ids);
        for (let i = 0; i < this.state.ids.length; i++) {
            axios.get(`https://www.balldontlie.io/api/v1/players/${this.state.ids[i]}`).then(response => {
                let player = response.data;
                this.state.team.push({ id: player.id, firstName: player.first_name, lastName: player.last_name, team: player.team.full_name, position: player.position });
                console.log(response);
            }).catch(() => {
                console.log("Error Loading Players");
            });
        }
    }

    addPlayer(player) {
        this.state.ids.push({ player });
    }
}