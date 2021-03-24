import React from 'react';
import './Test.css';

const Test = ({ history }) => {
    return (
        <div>
            <button onClick={() => history.push('/')} style={{ color: 'black' }}>돌아가기</button>
        </div>
    )
}

export default Test;