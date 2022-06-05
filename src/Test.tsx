import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './style/Test.css';

interface ChildComponentProps {
  history: RouteComponentProps['history'];
}

const Test: React.FC<ChildComponentProps> = ({ history }) => {
  return (
    <div>
      <button onClick={() => history.push('/')} style={{ color: 'black' }}>
        돌아가기
      </button>
    </div>
  );
};

export default Test;
