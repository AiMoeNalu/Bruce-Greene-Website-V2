import React from 'react';

import './Icon-Links.scss';



import SOCIAL_MEDIA_DATA from '../../assets/Social-Media/Social-Media-Data';

const IconLinks = () => (
    <div className='social-icons'>
    {
        SOCIAL_MEDIA_DATA.map(({Name, Link, Icon}) => (
            <a href={`${Link}`}><img src={require(`../../assets/Social-Media/${Icon}`)} alt={Name}></img></a>
        ))
    }
    </div>
);

export default IconLinks;