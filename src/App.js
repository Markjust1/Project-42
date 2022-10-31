import Navigation from './components/Navigation';
import Popular from './components/Popular';
import Games from './components/Games';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Popular />
      <main>
        <Games />
        {/* <Games /> */}
      </main>
    </div>
  );
}

export default App;
