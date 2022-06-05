import React, { useState, useRef, useEffect } from 'react';
import './style/App.css';
import WordList from './WordList';
import GotoTest from './GotoTest';
import AddWord from './AddWord';

const App: React.FC = () => {
  useEffect(() => {
    // console.log('useEffect 실행');
    return () => console.log('cleanup 함수 호출');
  }, []);

  const [wordList, setWordList] = useState([
    {
      id: 1,
      english: 'apple',
      korean: '사과',
    },
    {
      id: 2,
      english: 'korean',
      korean: '한글',
    },
    {
      id: 3,
      english: 'bag',
      korean: '가방',
    },
    {
      id: 4,
      english: 'book',
      korean: '책',
    },
    {
      id: 5,
      english: 'people',
      korean: '사람들',
    },
  ]);
  const [addWord, setAddWord] = useState({
    korean: '',
    english: '',
  });

  const { korean, english } = addWord;
  const nextId = useRef(6);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddWord({
      ...addWord,
      [e.target.name]: e.target.value,
    });
  };
  const onSave = () => {
    if (english === '' || korean === '') {
      // alert('영단어와 뜻 모두 입력해주세요!');
      setAddWord({
        korean: '',
        english: '',
      });
    } else {
      setWordList([
        ...wordList,
        {
          id: nextId.current,
          // korean: korean,
          // english: english,
          ...addWord,
        },
      ]);
      setAddWord({
        korean: '',
        english: '',
      });
      nextId.current++;
    }
  };

  const onRemove = (id: number) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      let wordData = wordList.filter((word) => {
        return word.id !== id;
      });
      setWordList(wordData);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <AddWord
          english={english}
          korean={korean}
          onChange={onChange}
          onSave={onSave}
        />
        <GotoTest />
        <WordList wordList={wordList} onRemove={onRemove} />
      </div>
    </div>
  );
};

export default App;
