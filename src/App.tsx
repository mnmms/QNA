import React, {useRef, useState} from 'react';
import './style/App.css';
import WordList from './WordList';
import GotoTest from './GotoTest';
import AddWord from './AddWord';
import { Card } from "@mui/material";

const App: React.FC = () => {

  const [wordList, setWordList] = useState([
    {
      id: 1,
      english: 'apple',
      korean: '사과',
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
    <Card className="container">
      <AddWord
        english={english}
        korean={korean}
        onChange={onChange}
        onSave={onSave}
      />
      <GotoTest />
      <WordList wordList={wordList} onRemove={onRemove} />
    </Card>
  );
};

export default App;
