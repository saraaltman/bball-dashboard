import React, { Component } from 'react';
import Navigation from '../Navigation';
import { Container } from 'reactstrap';

export default class Analytics extends Component {
    render(){
        return (
            <Container>
                <Navigation></Navigation>
                <br/>
                <h1>analytics</h1>
            </Container>
            
        )
    }
}