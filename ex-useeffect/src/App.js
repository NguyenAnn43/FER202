import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ValidatedInput from "./components/ValidatedInput";
import MyForm from "./components/MyForm";
import MyForm1 from "./components/MyForm1";

function App() {
  return (
    <div>
      <ValidatedInput />
      <br />
      <br />
      <MyForm />
      <br />
      <br />
      <MyForm1 />
    </div>
  );
}

export default App;
