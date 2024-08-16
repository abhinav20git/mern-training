
import './App.css';
import { useState } from 'react';

function App() {
  // const [color,setColor]=useState();
  // const [input,setInput] = useState();

  // const [sport,setSport] = useState();
  const [text,setText] = useState("");
    // let one=document.getElementsByClassName("one").value;
    // let two=document.getElementsByClassName("two").value;
    // let three=document.getElementsByClassName("three").value;
   
    const handlecheck=(e)=>{
      const flag=e.target.checked;
      const value=e.target.value;
      // console.log(flag)
      // console.log(value)
      if(flag){
        setText([...text, value]);
      }
      else{
        setText(text.filter((e)=>e!==value))
      }
      
    }
  return (
    <div className="App">
      {/* <input value={input} onChange={(e)=>setInput(e.target.value)}  className="input" type="text"/>
      <button className='btn' onClick={()=>setColor(input)}>Add Color</button>
      <div className='area' style={{'background-color':color}}>This is {color} background</div>
      <input onChange={(e)=>setInput(e.target.value)} type='text'/> */}

      Hockey<input className='one' type='checkbox' value="hockey" onChange={(e)=>handlecheck(e)} />
      Cricket<input  className='two'  type='checkbox'  value="Cricket" onChange={(e)=>handlecheck(e)}   />
      Basketabll<input className='three' type='checkbox'  value="Basketball" onChange={(e)=>handlecheck(e)}  />
      <div>{text}</div>
      
    </div>
  );
}

export default App;
