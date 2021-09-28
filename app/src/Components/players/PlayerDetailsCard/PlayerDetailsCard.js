import React, { Component } from 'react';

export default class PlayerDetailsCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            header1: ["Fantasy Points", "Points", "Rebounds", "Steals"],
            header2: ["Blocks", "Turnovers", "Assists", "Minutes"],
            stats1: [],
            stats2: [],
            player: this.props.player,
            loaded: false
        }
    }

    componentDidMount() {
        this.loadPlayerStats();
    }

    render() {
        return (
            <div>
                {this.state.loaded && <div className="card">
                    <div>
                        <div> Team </div>
                        <div> Position </div>
                        <div>  Status </div>
                    </div>
                    <div>
                        <PlayerDetailsTable keys={this.state.header1} stats={this.state.stats1}></PlayerDetailsTable>
                    </div>
                    <div>
                        <PlayerDetailsTable keys={this.state.header2} stats={this.state.stats2}></PlayerDetailsTable>
                    </div>
                </div>}
            </div>
        )
    }

    loadPlayerStats() {
        APIClient.getDBPlayerStats(this.state.player.id).then(response => {
            let s1 = [];
            let s2 = [];
            this.state.
            this.setState({ stats: response.stats[0], loaded: true });
        }).catch(() => {
            console.log("Error Loading Player Stats");
        });
    }
}