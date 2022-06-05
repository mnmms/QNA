import React from 'react';
import './style/WordsList.css';
import Word from './Word';

type wordList = {
  id: number;
  korean: string;
  english: string;
};

interface Props {
  wordList: wordList[];
  onRemove: (id: number) => void;
}

const WordList: React.FC<Props> = ({ wordList, onRemove }) => {
  return (
    <div className="wordsList">
      <div
        style={{
          fontWeight: 'bold',
          fontSize: '0.8em',
          textAlign: 'right',
          color: '#555',
        }}
      >
        총 {wordList.length}개의 단어
      </div>
      <ol>
        {wordList.map((wordItem, idx) => {
          return <Word key={idx} wordItem={wordItem} onRemove={onRemove} />;
        })}
      </ol>
    </div>
  );
};

export default WordList;
