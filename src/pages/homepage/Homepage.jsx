import React from 'react';

import './Homepage.scss';

import ReactTwitchEmbedVideo from "react-twitch-embed-video";
import DonateForm from '../../components/Donate-Form/DonateForm';

const Homepage = () => (
    <div id='homepage'>
        <div className='aspect-ratio'>
             <ReactTwitchEmbedVideo id='twitch-embed' channel="brucegreene"/>
        </div>
        <DonateForm/>
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