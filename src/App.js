import react, { useState, useRef } from 'react';
import './App.css';
import WordsList from './WordsList';
import AddWords from './AddWords';

function App() {

  const [wordsList, setWordsList] = useState([
    {
      id: 1,
      english: 'english',
      korean: '영어'
    },
    {
      id: 2,
      english: 'korean',
      korean: '한글'
    },
  ]);

  const [addWords, setAddWords] = useState({
      english: '',
      korean: ''
  });

  const { english, korean } = wordsList;

  const nextId = useRef(3);

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
        {/* <button>시험보기</button> */}
        <WordsList wordsList={wordsList}/>
      </div>
    </div>
  );
}

export default App;
