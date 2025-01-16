import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NamePerson from "./components/NamePerson";
import PersonDetails from "./components/PersonDetails";
import PeopleList  from "./components/PeopleList";
import PeopleTable  from "./components/PeopleTable";
import FirstTeenager  from "./components/FirstTeenager";
import AreAllTeenagers  from "./components/AreAllTeenagers";
import SortByOccupationAndAge  from "./components/SortByOccupationAndAge";
import GroupedOccupation  from "./components/GroupedOccupation";
import OldestYoungest  from "./components/OldestYoungest";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <NamePerson />
    <PersonDetails />
    <PeopleList />
    <PeopleTable />
    <FirstTeenager />
    <AreAllTeenagers />
    <SortByOccupationAndAge />
    <GroupedOccupation />
    <OldestYoungest />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
