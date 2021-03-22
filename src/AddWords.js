import react from 'react';

const AddWords = ({ english, korean, onChange, onSave }) => {
    return (
        <div>
            <input type="text" value={english} name="english" placeholder="영단어" onChange={onChange}/>
            <input type="text" value={korean} name="korean" placeholder="뜻" onChange={onChange}/>
            <button onClick={onSave}>등록</button>
        </div>
    );
};

export default AddWords;