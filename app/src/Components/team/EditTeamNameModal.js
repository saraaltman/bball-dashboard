import React, { Component } from 'react';
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";


export default class EditTeamNameModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
        }
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen}>
                <ModalHeader> Edit Team Name </ModalHeader>
                <ModalBody>
                    <label htmlFor="name">Name</label><br />
                    <input style={{ width: '350px' }} value={this.state.name} type="text" id="name" onChange={(e) => { this.setName(e.target.value) }} required></input>
                </ModalBody>
                <ModalFooter>
                    <Button variant="primary" onClick={() => this.props.onClose(this.state.name)}> Done </Button>
                </ModalFooter>
            </Modal>
        )
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
}