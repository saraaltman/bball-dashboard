import React, { Component } from 'react';

export default class PlayerDetailsTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keys: this.props.keys,
            stats: this.props.stats
        }
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        {this.state.keys.map(key => {
                            <th>{key}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {this.state.stats.map(s => {
                            <tr>{s}</tr>
                        })}
                    </tr>
                </tbody>
            </table>
        )
    }
}