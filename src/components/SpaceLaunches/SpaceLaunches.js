import React, {useEffect, useState} from 'react';
import {SpaceLaunch} from "../SpaceLaunch/SpaceLaunch";
import './SpaceLaunches.css'

const SpaceLaunches = () => {

    let [launches,setLaunches] = useState([]);

    useEffect(()=> {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setLaunches(value.filter(value => value.launch_year !== '2020')))
    },[]);




    return (
        <div className={'spaceLaunches'}>
            {launches.map((item,index )=> <SpaceLaunch item={item} key={index}/>)}
        </div>
    );
};

export {SpaceLaunches};