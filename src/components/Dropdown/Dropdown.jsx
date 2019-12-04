import React from 'react';

import './Dropdown.scss';

const Dropdown = ( {currencyData, onCurrencySelect} ) => {
    return(
    <div id='currency-select'>
        <div className="dropdown">
            <div className="dropbtn"><span>↓</span> USD</div>
            <div className="dropdown-content">
                <ul>
                    {
                        currencyData.map( ({abbreviation, symbol, id}) => (
                            <li 
                            onClick={onCurrencySelect}
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