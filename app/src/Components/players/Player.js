import React, { Component } from 'react';
import Navigation from '../Navigation';
import { Container } from 'reactstrap';

import APIClient from '../../APIClient';
import TEAM_MAP from '../../models/TeamMap';

import './Player.css';

export default class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            player: {},
            stats: {},
            loaded1: false,
            loaded2: false
        }
    }

    componentDidMount() {
        this.loadPlayer(this.state.id);
    }

    render() {
        return (
            <Container className="main">
                <Navigation></Navigation>
                <br />
                <br />
                {this.state.loaded1 && this.state.loaded2 && <Container className="content">
                    <h1>{this.state.player.firstName} {this.state.player.lastName}</h1>
                    <h3>Team</h3>
                    <body> {TEAM_MAP[this.state.player.team_id]}</body>
                </Container>}

            </Container>

        )
    }

    loadPlayer(id) {
        APIClient.getDBPlayerStats(id).then(response => {
            this.setState({ stats: response.stats[0], loaded1: true });
        }).catch(() => {
            console.log("Error Loading Player Stats");
        });

        APIClient.getPlayer(id).then(response => {
            this.setState({ player: response.player[0], loaded2: true });
        }).catch(() => {
            console.log("Error Loading Player Stats");
        });
    }
}