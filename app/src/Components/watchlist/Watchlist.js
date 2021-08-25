import React, { Component } from 'react';
import Navigation from '../Navigation';
import { Container } from '@material-ui/core';


export default class Watchlist extends Component {
    render(){
        return (
            <Container>
                <Navigation></Navigation>
                <br/>
                <h1>watchlist</h1>
            </Container>
            
        )
    }
}