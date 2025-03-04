import React from "react";
import Counter from "./components/Counter";
import ChangeNameAge from "./components/ChangeNameAge";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemList from "./components/ItemList";
import QuestionBank from "./components/QuestionBank";
import ItemList1 from "./components/ItemList1";
import QuestionBank1 from "./components/QuestionBank1";

function App() {
  return (
    <div>
      <Counter />
      <br />
      <br />
      <ChangeNameAge />
      <br />
      <br />
      <ItemList />
      <br />
      <br />
      <ItemList1 />
      <br />
      <br />
      <QuestionBank />
      <br />
      <br />
      <QuestionBank1 />
      <br />
    </div>
  );
}

export default App;
