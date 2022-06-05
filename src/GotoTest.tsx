import React from 'react';
import { Link } from 'react-router-dom';

const GotoTest: React.FC = () => {
  return (
    <Link to="/test">
      <button className="main-button test-button">시험 보기</button>
    </Link>
  );
};

export default GotoTest;
