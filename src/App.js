import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Allroutes from './Allroutes'


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Allroutes/>
      </Router>
    </div>
  );
}

export default App;
