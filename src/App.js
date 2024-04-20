import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
    const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">Welcome to Thisal Karunarathna's First Successfull Crud After Many Attempts</h1>
        <button className='user-button' onClick={() => navigate('/Users')}>Proceed</button>
      </header>
    </div>
  );
}

export default App;
