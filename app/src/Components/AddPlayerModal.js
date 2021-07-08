import React, { Component } from 'react';
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { RadioGroup, Radio, FormControlLabel} from "@material-ui/core";
import APIClient from '../APIClient';

export default class AddPlayerModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: {},
            playerID: {},
            name: "",
            nameFilled: false,
            results: []
        }
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen}>
                <ModalHeader> Add Player </ModalHeader>
                <ModalBody>
                    <label htmlFor="name">Name</label><br />
                    <input style={{ width: '350px' }} type="text" id="name" onChange={(e) => { this.setName(e.target.value) }} required></input>&nbsp;<Button onClick={() => this.search()}>Search</Button><br /><br />
                        <RadioGroup name="player" value={this.state.player} onChange={this.handleChange}>
                            {this.state.results.map(p => {
                                return (
                                    <FormControlLabel value={p.id} control={<Radio checked={this.state.playerID == p.id}/>} label={`${p.first_name} ${p.last_name}`}></FormControlLabel>
                                );
                            })
                            }
                        </RadioGroup>
                </ModalBody>
                <ModalFooter>
                    <Button variant="primary" onClick={() => this.addPlayer()}> Add</Button>
                    <Button variant="secondary" disabled={!this.state.nameFilled} onClick={this.props.onClose}>Close</Button>
                </ModalFooter>
            </Modal>
        )
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({ playerID: e.target.value });
        this.setState({ player: this.state.results.filter((p) => { return p.id == e.target.value; })[0] });
    }

    setName(name) {
        this.setState({
            name: name
        });
        if (name.length !== 0) {
            this.setState({
                nameFilled: true
            });
        } else {
            this.setState({
                nameFilled: false
            });
        }
    }

    search() {
        APIClient.playerSearch(this.state.name).then(response => {
            this.setState({ results: response.data });
        }).catch(() => {
            console.log("Error Loading Players");
        });
    }

    addPlayer() {
        APIClient.addPlayer(this.state.player.id, this.state.player.first_name, this.state.player.last_name, this.state.player.position, this.state.player.team.id, this.state.player.height_feet, this.state.player.height_inches, this.state.player.weight_pounds).then(response => {
            this.props.onClose();
        }).catch(() => {
            console.log("Error Adding Player");
        });
    }
}