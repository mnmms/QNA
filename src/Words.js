import React from 'react';

const Words = ({ item, onRemove }) => {

    const { id, english, korean } = item;

    return (
        <div className="words">
            <span><b>{english} </b></span>
            <span>{korean} </span>
            <button
                style={{ background: 'none', color: '#00E162', border: 'none', fontWeight: 'bold' }}
                onClick={() => onRemove(id)}
                >삭제</button>
        </div>
    )
}

export default Words;