import React from 'react';

const Simpsons = (props) => {
    const {name,img,info} = props;

    return (
        <div>
            <h3>{name}</h3>
            <img src={img} alt={name}/>
            <p>{info}</p>
        </div>
    );
};

export default Simpsons;