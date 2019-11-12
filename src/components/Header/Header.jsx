import React from 'react';

import './Header.scss';

import IconLinks from '../Social-Media/Icon-Links';

const Header = (props) => (
    <div id='header'>
        <ul id="nav">
            <li className='left'><IconLinks/></li>
            <li className='center'><span>Logo</span></li>
            <li className='right'><span>Options</span></li>
        </ul>
    </div>
);

export default Header;