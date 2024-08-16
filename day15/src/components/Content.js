import React, { useContext } from 'react'
import { counterContext } from '../context/counterContext';

const Content = () => {
  const count=useContext(counterContext);
  return (
    <div>Content {count}</div>
  )
}

export default Content