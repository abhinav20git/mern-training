
import { Route, Routes } from 'react-router';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import { BrowserRouter as Router} from 'react-router-dom';
function App() {

  
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
