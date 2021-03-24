import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import WordsList from './WordsList';
// import Test from './Test';
import AddWords from './AddWords';

function App() {

  const [wordsList, setWordsList] = useState([
    {
      id: 1,
      english: 'apple',
      korean: '사과'
    },
    {
      id: 2,
      english: 'korean',
      korean: '한글'
    },
    {
      id: 3,
      english: 'bag',
      korean: '가방'
    },
    {
      id: 4,
      english: 'book',
      korean: '책'
    },
    {
      id: 5,
      english: 'people',
      korean: '사람들'
    },
  ]);

  const [addWords, setAddWords] = useState({
      english: '',
      korean: ''
  });

  const { english, korean } = addWords;

  const nextId = useRef(6);

  const onChange = e => {
    setAddWords({
        ...addWords,
        [e.target.name]: e.target.value
      })
  }

  const onSave = () => {

    if(english === '' || korean === '') {
      alert('영단어와 뜻 모두 입력해주세요!');
      setAddWords({
        english: '',
        korean: ''
      })
    } else {
      setWordsList([
        ...wordsList,
        {
          id: nextId.current,
          // english: english,
          // korean: korean
          ...addWords
        }
      ])
      setAddWords({
        english: '',
        korean: ''
      })
      nextId.current++;
    }
  }

  return (
    <div className="app">
      <div className="container">
        <AddWords english={english} korean={korean} onChange={onChange} onSave={onSave}/>
        <Link to="/test"><button className="test-button">시험 보기</button></Link>
        <WordsList wordsList={wordsList}/>
      </div>
    </div>
  );
}

export default App;
