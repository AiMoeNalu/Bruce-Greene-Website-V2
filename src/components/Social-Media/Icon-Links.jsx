import React from 'react';

import './Icon-Links.scss';

import SOCIAL_MEDIA_DATA from '../../assets/Social-Media/Social-Media-Data';

const IconLinks = () => (
    <div className='social-icons'>
        {
            SOCIAL_MEDIA_DATA.map(({Name, Link, Icon}) => (
                <div onClick={() => window.open(Link, "_blank")}>{Icon}</div>
            ))
        }
    </div>
);

export default IconLinks;