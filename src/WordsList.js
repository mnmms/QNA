import React from 'react';
import './style/WordsList.css';
import Words from './Words';


const WordsList = ({ wordsList, onRemove }) => {
    return (
        <div className="wordsList">
            <div style={{ fontWeight: 'bold', fontSize: '0.8em', textAlign: 'right', color: '#555' }}>총 {wordsList.length}개의 단어</div>
            <ol>
                {wordsList.map((item, idx) => {
                    return (
                        <Words key={idx} item={item} onRemove={onRemove}/>
                    )
                })}
            </ol>
        </div>
    );
};

export default WordsList;