import React from 'react';

import './Icon-Links.scss';

import Svg from 'svg-react';

import SOCIAL_MEDIA_DATA from '../../assets/Social-Media/Social-Media-Data';

const IconLinks = () => (
    <div className='social-icons'>
    {
        SOCIAL_MEDIA_DATA.map(({Name, Link, Icon}) => (
            <div className='social-icons'><Svg src={`../../assets/Social-Media/${Icon}`}/></div>
        ))
    }
    </div>
);

export default IconLinks;