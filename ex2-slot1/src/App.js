import logo from './logo.svg';
import './App.css';

function App() {
  const people = [
    { age: 20, name: "AN" },
    { age: 25, name: "Binh" },
    { age: 30, name: "Chi" },
    { age: 35, name: "Dung" },
    { age: 40, name: "Hoa" }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>People List</h1>
        <ul>
          {people.map((person, index) => (
            <li key={index}>
              {person.name}, {person.age} years old
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
