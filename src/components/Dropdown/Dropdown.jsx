import React from 'react';

import './Dropdown.scss';

const Dropdown = ( {text, dropdownList, onSelect} ) => {
    return(
    <div id='currency-select'>
        <div className="dropdown">
            <div className="dropbtn"><span>↓</span> {text}</div>
            <div className="dropdown-content">
                <ul>
                    {
                        dropdownList.map( ({abbreviation, symbol, id}) => (
                            <li 
                            onClick={() => onSelect()}
                            value={id}
                            key={id}
                            >
                            {abbreviation}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
    )};

export default Dropdown;