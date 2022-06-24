import React from 'react';

const RickAndMorty = (props) => {
    const {id,name,status,species,gender,image} = props;
    return (
        <div>
            <h5>{id}</h5>
            <h4>{name}</h4>
            <p>{status}</p>
            <p>{species}</p>
            <p>{gender}</p>
            <img src={image} alt={name}/>
        </div>
    );
};



export default RickAndMorty;