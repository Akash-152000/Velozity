import './App.css';
import Movies from './components/Movies/Movies';
import Navbar from './components/Navbar/Navbar';
import FetchMoviesState from './context/FetchMovies/FetchMoviesState';

function App() {
  return (
    <div className="App">
      <FetchMoviesState>
        <Navbar/>
        <Movies/>
      </FetchMoviesState>
      
    </div>
  );
}

export default App;
