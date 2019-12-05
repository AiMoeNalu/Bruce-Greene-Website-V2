import React from 'react';

import './Header.scss';

import IconLinks from '../Social-Media/Icon-Links';

const Header = ({ handlePageSelect }) => (
    <div id='header'>
        <ul id="nav">
            <li className='left'><IconLinks/></li>
            <li className='center'><span>Bruce-Greene-Logo</span></li>
            <li className='right'>
                <ul>
                    <li>Donate</li>
                    <li>Events</li>
                    <li>Login</li>
                </ul>
            </li>
        </ul>
    </div>
);

export default Header;