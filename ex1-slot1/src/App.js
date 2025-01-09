import logo from './logo.svg';
import './App.css';

function App() {
  const person ={
    age: 20,
    name: "AN",
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello wolrd!, {person.name}, {person.age} </h1>
      </header>
    </div>
  );
}

export default App;
