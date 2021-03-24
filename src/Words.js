import React from 'react';

const Words = ({item}) => {

    const { id, english, korean } = item;

    return (
        <div className="words">
            <span>{id}. </span>
            <span><b>{english} </b></span>
            <span>{korean}</span>
        </div>
    )
}

export default Words;