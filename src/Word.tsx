import React from 'react';

type WordItem = {
  id: number;
  korean: string;
  english: string;
};

interface Props {
  wordItem: WordItem;
  onRemove: (id: number) => void;
}

const Word: React.FC<Props> = ({
  wordItem: { id, korean, english },
  onRemove,
}) => {
  return (
    <li className="words">
      <span>
        <b>{english} </b>
      </span>
      <span>{korean} </span>
      <button
        style={{
          background: 'none',
          color: '#00E162',
          border: 'none',
          fontWeight: 'bold',
        }}
        onClick={() => onRemove(id)}
      >
        삭제
      </button>
    </li>
  );
};

export default Word;
