import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';

function App() {
  return (
    // BEM Class naming convension.
    <div className="App">
      <Header />
      <TinderCards />
      {/* Swipe Buttons */}
    </div>
  );
}

export default App;
