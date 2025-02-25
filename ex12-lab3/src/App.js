import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import ControlledInput from "./components/ControlledInput";
import ToggleVisibility from "./components/ToggleVisibility";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import ColorSwitcher from "./components/ColorSwitcher";
import SearchFilter from "./components/SearchFilter";
import DragAndDropList from "./components/DragAndDropList";

function App() {
  const items = ["Apple", "Banana", "Orange", "Grape", "Mango", "Pineapple"];
  return (
    <div>
      <Counter />
      <ControlledInput />
      <ToggleVisibility />
      <TodoList />
      <ColorSwitcher />
      <h1>Search Filter Example</h1>
      <SearchFilter items={items} />
      <DragAndDropList />
    </div>
  );
}

export default App;
