import { useState } from 'react';
import './App.css';
import Input from './Components/Input';
import Preview from './Components/Preview';

function App() {

  const [input, setInput] = useState('');

  return (
    <div className="App">
      <h2 className = "title">Markdown Previewer</h2>
      <div className = "main-container">
        <Input setInput = {setInput} input = {input}/>
        <Preview input = {input}/>
      </div>   
    </div>
  );
}

export default App;
