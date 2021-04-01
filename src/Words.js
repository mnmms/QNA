import React from 'react';

const Words = ({ item, onRemove }) => {

    const { id, english, korean } = item;

    return (
        <li className="words">
            <span><b>{english} </b></span>
            <span>{korean} </span>
            <button
                style={{ background: 'none', color: '#00E162', border: 'none', fontWeight: 'bold' }}
                onClick={() => onRemove(id)}
                >삭제</button>
        </li>
    )
}

export default Words;