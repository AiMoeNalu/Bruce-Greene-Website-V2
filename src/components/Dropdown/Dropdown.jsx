import React from 'react';

import './Dropdown.scss';

const Dropdown = () => (
    <div id='currency-select'>
        <div className="dropdown">
            <button class="dropbtn">Dropdown</button>
            <div class="dropdown-content">
                <ul>
                    <li>USD</li>
                    <li>CAN</li>
                </ul>
            </div>
        </div>
    </div>
);

export default Dropdown;