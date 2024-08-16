import React from 'react'
import Navbar from './Navbar'
import "./Home.css"
const Home = () => {
  return (
    <div>
        <Navbar/>
        {/* <div className='text'>This is home page</div> */}
        <div className='container'>
            
            
            <img height="400px" width="350px" src="https://thumbs.dreamstime.com/b/dream-home-20073208.jpg"/>
        </div>
       
    </div>
  )
}

export default Home