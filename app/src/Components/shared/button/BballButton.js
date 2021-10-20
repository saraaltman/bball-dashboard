import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faEdit, faTrash, faUserPlus } from '@fortawesome/fontawesome-free-solid'

import './BballButton.css';

export default function BballButton(props) {

    const btnClass = classNames({
        bballButton: true,
        primary: !props.disabled && props.buttonType === "primary",
        secondary: !props.disabled && props.buttonType === "secondary",
        disabled: props.disabled
    })

    return (
        <div className={btnClass} onClick={!props.disabled && props.onClick}>
            {props.label}
            {props.content === "search" && <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>}
            {props.content === "edit" && <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>}
            {props.content === "add" && <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>}
            {props.content === "delete" && <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>}
        </div>
    );
}