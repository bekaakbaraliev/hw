import React, {useState} from 'react';
import './App.css';
import Comment from './components/Comment';
import Render from './components/Render';
function App() {
  const [list, setList] = useState([]);

  const onAddListHundler = (text) => {
    setList( prevList => {
      // console.log(prevList)
      return [text, ...prevList]
    })
  }
  return <div className="App">
    <Comment onAddList={onAddListHundler}/>
    <Render list={list}/>
  </div>
}

export default App;