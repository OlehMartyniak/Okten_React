import React from 'react';
import './SpaceLaunch.css'

const SpaceLaunch = (props) => {

    let {item} = props;

    return (
        <div className={'spaceLaunch'}>
           <h4>Mission name: {item.mission_name}</h4>
            <p>Launch year: {item.launch_year}</p>
            <img src={item.links.mission_patch_small} alt={item.mission_name}/>
        </div>
    );
};

export {SpaceLaunch};