import React from 'react';

import './Homepage.scss';

import ReactTwitchEmbedVideo from "react-twitch-embed-video";

const Homepage = () => (
    <div id='homepage'>
        <div className='aspect-ratio'>
             <ReactTwitchEmbedVideo id='twitch-embed' channel="brucegreene" layout="video"/>
        </div>
        <div id='donate-component'>
            donate-component
        </div>
        <div id='store-preview'>
            store-preview
        </div>
        <div id='community-leaderboards'>
            community-leaderboards
        </div>
        <div id='community-events'>
            community-events
        </div>
    </div>
);

export default Homepage;