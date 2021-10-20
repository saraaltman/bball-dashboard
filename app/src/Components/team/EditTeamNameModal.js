import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Input from '../shared/Input/Input'
import BballButton from '../shared/button/BballButton';

import './EditTeamNameModal.css';


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
                <ModalHeader className="editHeader"> Edit Team Name </ModalHeader>
                <ModalBody>
                    <div className="teamNameInput">
                        <Input label="Team Name" value={this.state.name} disabled={false} onChange={(e) => { this.setName(e.target.value) }}></Input>&nbsp;
                            </div>
                </ModalBody>
                <ModalFooter>
                    <div className="doneButton">
                        <BballButton onClick={() => this.props.onClose(this.state.name)} label="Done" buttonType="primary"></BballButton>
                    </div>
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