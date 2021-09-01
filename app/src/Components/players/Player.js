import React, { Component } from 'react';
import Navigation from '../Navigation';
import { Container } from 'reactstrap';

export default class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: this.props.match.params.first,
            lastname: this.props.match.params.last
        }
    }

    render(){
        return (
            <Container>
                <Navigation></Navigation>
                <br/>
                <h1>{this.state.firstname} {this.state.lastname}</h1>
            </Container>
            
        )
    }
}