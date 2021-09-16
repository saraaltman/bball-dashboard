import React, { Component } from 'react';
import Navigation from '../Navigation';
import { Container } from 'reactstrap';

import './Analytics.css'

export default class Analytics extends Component {
    render() {
        return (
            <Container className="main">
                <Navigation></Navigation>
                <br />
                <Container className="content">
                    <h1 className="analyticsTitle" >Analytics</h1>
                    <br/><br/><br/>
                    <h4>Coming Soon</h4>
                </Container>
            </Container>

        )
    }
}