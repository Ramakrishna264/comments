import { useState } from 'react';
import './App.css';
import Comment from './Comment';

function App() {
  const [comments, setState] = useState([]);
  const [text, setValue] = useState({});
  const handlecomment = (e) => {
    const value = e?.target.value;
    setValue(value);  
  } 
  const handleSubmit = (text,parentIndex, index) => {
    let data = [...comments || []];
    if(!parentIndex) {
      const obj = {
        value: text,
        parentLevel: index || 0
      }
      data.push(obj)
    }
    if(index) {
      data[index].childs = {};
      data[index].childs = data;
    }
    console.log("data",data);
    setState(data);
  }
  const onDelete = (parentIndex) => {
    let data = [...comments];
    data.splice(parentIndex,1);
    setState(data);
  }


  return (
    <div className="App">
      <div className='header'>
        <textarea onChange={handlecomment} />
        <button onClick={()=> handleSubmit(text,0)}>Comment</button>
        {
          comments?.map((comment,index) => {
            return <Comment text={comment?.value} key={index} parentLevel={comment?.parentLevel} level={index} onDelete={onDelete} handleSubmit = {handleSubmit}/>
          })        
        }
        </div>
    </div>
  );
}

export default App;
