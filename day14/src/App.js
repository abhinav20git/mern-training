
import './App.css';
import { useState } from 'react';

function App() {
  const [color,setColor]=useState();
  const [input,setInput] = useState();
  
  return (
    <div className="App">
      <input value={input} onChange={(e)=>setInput(e.target.value)}  className="input" type="text"/>
      <button className='btn' onClick={()=>setColor(input)}>Add Color</button>
      <div className='area' style={{'background-color':color}}>This is {color} background</div>
    </div>
  );
}

export default App;
