import react, { useState } from 'react';
import wordsList from './wordsList.css';

const WordsList = ({ wordsList }) => {
    return (
        <div className="wordsList">
            <h2>영단어 목록</h2>
            {wordsList.map(item => {
                return (
                <div key={item.id}>
                    <span>{item.id}. </span>
                    <span>{item.english} </span>
                    <span>{item.korean}</span>
                </div>
                )
            })}
        </div>
    );
};

export default WordsList;