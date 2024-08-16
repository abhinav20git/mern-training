import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import axios from 'axios';
function App() {
  const [data,setData]=useState();
  const users=[
    {
    name:"abhi", 
    age:9,                                                            
    },
  {
    name:"sdg",
    age:3,
  }]
  useEffect(()=>{
    async function fetchData() {
      try{
        const response=await axios.get(users);
        const data=response.json;
        console.log(data);
        setData(data);
        }
        catch(err){
          console.log(err);
        }
   
       
  }
  fetchData();

},[])
  return (
    <div className="App">
      {/* <buuton onClick={fetchData}>Click Me</buuton> */}
      {/* {data.map((item)=>{
        return(
          
           <p >{item.name}</p>
           
        )
       
})} */}
    </div>
  );
}

export default App;
