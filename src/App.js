import React, { useState, useRef } from 'react';
import './App.css';
import WordsList from './WordsList';
import Test from './Test';
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
  ]);

  const [addWords, setAddWords] = useState({
      english: '',
      korean: ''
  });

  const { english, korean } = wordsList;

  // const nextId = useRef(4);

  const onChange = e => {
    setAddWords({
        ...addWords,
        [e.target.name]: e.target.value
      })
  }

  const onSave = () => {
    // alert('등록되었습니다!');

  }

  return (
    <div className="app">
      <div className="container">
        <AddWords english={english} korean={korean} onChange={onChange} onSave={onSave}/>
        <Test />
        <WordsList wordsList={wordsList}/>
      </div>
    </div>
  );
}

export default App;
