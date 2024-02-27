import React from 'react'
import fetch from 'node-fetch';
import datajs from '../conf/key.json';

const Get_Location = ({city}) => {
    const key = datajs.API_key;
    // const response = fetch('https://geocode.maps.co/search?q=' + { city } + '&api_key=' + { key });
    // const data = response.json();
    return (
        <div>
            <h1>City: {city}</h1>
            <h2>key: {key}</h2>
        </div>
    )
}

export default Get_Location;