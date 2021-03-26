import React from 'react';
import './WordsList.css';
import Words from './Words';


const WordsList = ({ wordsList, onRemove}) => {
    return (
        <div className="wordsList">
            <div style={{ fontWeight: 'bold', fontSize: '0.8em', textAlign: 'right', color: '#555' }}>총 {wordsList.length}개의 단어</div>
            {wordsList.map(item => {
                return (
                    <Words key={item.id} item={item} onRemove={onRemove}/>
                )
            })}
        </div>
    );
};

export default WordsList;