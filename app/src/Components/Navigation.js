import React, { Component } from 'react';
import { Navbar, NavItem, NavLink, Nav } from 'reactstrap';

import './Navigation.css';

export default class Navigation extends Component {

    render() {
        return (
            <Navbar>
                <Nav fixed='top'>
                    <NavItem>
                        <NavLink style={{color: "black"}} href="/">My Team</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{color: "black"}} href="/watchlist"> Watch List</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{color: "black"}} href="/analytics"> Analytics</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}