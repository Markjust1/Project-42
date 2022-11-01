import Navigation from './components/Navigation';
import Popular from './components/Popular';
import Games from './components/Games';
import Platform from './components/Platform';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Popular />
      <main className='top-content'>
        <Games />
        <Platform />
      </main>
    </div>
  );
}

export default App;
