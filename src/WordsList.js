import React from 'react';
import './WordsList.css';
import Words from './Words';


const WordsList = ({ wordsList }) => {
    return (
        <div className="wordsList">
            {/* <div style={{ fontWeight: 'bold', fontSize: '1.3em' }}>영단어</div> */}
            {wordsList.map(item => {
                return (
                    <Words item={item}/>
                )
            })}
        </div>
    );
};

export default WordsList;