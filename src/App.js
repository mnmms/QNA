import React, { useState, useRef, useEffect } from 'react';
import './style/App.css';
import WordsList from './WordsList';
import GotoTest from './GotoTest';
import AddWords from './AddWords';

function App() {

  useEffect(() => {
    console.log('useEffect 실행');
    return () => console.log('cleanup 함수 호출');
  }, []);

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
      korean: '',
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

  const onRemove = id => {

    if(window.confirm('정말 삭제하시겠습니까?')) {
      let words = wordsList.filter(word => {
        return word.id !== id;
      })
  
      setWordsList(words);
    }
  }

  return (
    <div className="app">
      <div className="container">
        <AddWords english={english} korean={korean} onChange={onChange} onSave={onSave}/>
        <GotoTest />
        <WordsList wordsList={wordsList} onRemove={onRemove}/>
      </div>
    </div>
  );
}

export default App;
