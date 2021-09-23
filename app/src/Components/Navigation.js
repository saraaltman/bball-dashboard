import React, { Component } from 'react';
import { Navbar, NavItem, NavLink, Nav } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketballBall } from '@fortawesome/fontawesome-free-solid'

import './Navigation.css';

export default class Navigation extends Component {

    render() {
        return (
            <Navbar>
                <Nav fixed='top'>
                    <NavItem><FontAwesomeIcon className="navBall" icon={faBasketballBall}></FontAwesomeIcon></NavItem>
                    <NavItem>
                        <NavLink className="navbar" href="/"><h5>My Team</h5></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="navbar" href="/watchlist"> <h5>Watch List</h5></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="navbar" href="/analytics"> <h5>Analytics</h5></NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}