import './App.css';
import Input from './components/Input.jsx';
import GeolocationComponent from './components/GeolocationComponent.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Input />
        <GeolocationComponent />
      </header>
    </div>
  );
}

export default App;
