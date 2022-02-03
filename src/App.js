
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header score={12}/>
      <div className='App-container'>
      <Home/> 
      </div>
  
    </div>
  );
}

export default App;
