import React, { useState } from 'react';

import './RadioButton.css';

export default function RadioButton(props) {

    return (
        <div className="radioContainer">
            <input
                type="radio"
                value={props.value}
                checked={props.checked}>
            </input>
            {props.label}
        </div>
    );
}