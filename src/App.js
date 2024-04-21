import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
    const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">Welcome to Thisal Karunarathna's First Successfull Crud After Many Attempts</h1>
        <button className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => navigate('/users')}>Proceed</button>
      </header>
    </div>
  );
}

export default App;
