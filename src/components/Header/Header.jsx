import React from 'react';

import './Header.scss';

import {
    HashRouter as Router
} from 'react-router-dom';

import IconLinks from '../Social-Media/Icon-Links';

const Header = ({ navLinks }) => (
    <div id='header'>
        <Router>
            <ul id="nav">
                <li className='left'><IconLinks/></li>
                <li className='center'><span>Bruce-Greene-Logo</span></li>
                <li className='right'>
                    <ul>
                        {
                            navLinks.map( link => link)
                        }
                    </ul>
                </li>
            </ul>
        </Router>
    </div>
);

export default Header;