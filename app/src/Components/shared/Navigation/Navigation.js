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
                        <NavLink href="/"><h5 className='navLabel'>My Team</h5></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/watchlist"> <h5 className='navLabel'>Watch List</h5></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/analytics"> <h5 className='navLabel'>Analytics</h5></NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}