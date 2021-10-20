import React from 'react';

import './Input.css';

export default function Input(props) {

    return (
        <div>
            <label className="textLabel" htmlFor="text">{props.label}</label><br/>
            <input className="textInput" id="text" type="text" disabled={props.disabled} onChange={props.onChange} value={props.value}></input>
        </div>
    );
}