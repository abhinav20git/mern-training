
import { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './components/Header';
import {counterContext} from  "./context/counterContext"
function App() {
  // const res=useRef()
  // useEffect(() =>{
  //   btnRef.current.style.background="cyan";
  // },[])
  const [count,setCount]=useState(0);
  // useEffect (() =>{
   
  //    const response=fetch('https://fakestoreapi.com/products');
  //    const data= response.json();
  //    console.log(data);
    
  // },[data])

  return (
    <counterContext.Provider value={count}>
    <div className="App">
      {/* <button res={btnRef} >systum</button> */}
      {/* <button onClick={()=>search()}>Search</button>
      <div>{data}</div> */}
      <Header name="gaurav" />
      {/* <button onClick={()=>setCount(count+1)}>Increase</button> */}
      <p>{count}</p>
      <div className='div'>
      <button onClick={()=>setCount(count+1)}>Plus</button>
      <button onClick={()=>setCount(count-1)}>Minus</button>
      <button onClick={()=>setCount(count*2)}>Multipy</button>
      <button onClick={()=>setCount(count/2)}>divide</button>
      <button onClick={()=>setCount(count%2)}>Remender</button>
      <button onClick={()=>setCount(count*count)}>Square</button>
      <button onClick={()=>setCount(Math.sqrt(count))}>Square Root</button>
      <button onClick={()=>setCount(count===0)}>Reset</button>
      </div>
      
    </div>
    </counterContext.Provider>
  );
}

export default App;
