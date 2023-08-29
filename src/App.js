import './App.css';
import Movies from './components/Movies/Movies';
import Navbar from './components/Navbar/Navbar';
import FetchFavState from './context/FetchFavorites/FetchFavState';
import FetchMoviesState from './context/FetchMovies/FetchMoviesState';

function App() {
  return (
    <div className="App">
      <FetchMoviesState>
      <FetchFavState>
        <Navbar/>
        <Movies/>
      </FetchFavState>
      </FetchMoviesState>
      
    </div>
  );
}

export default App;
