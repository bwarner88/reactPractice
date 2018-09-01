import React from "react";
import List from "./components/List";

const groceries = [
  {
  id: 1,
  name: "Ashley",
  },
  {
    id: 2,
    name: "Brian"
  },
  {
    id: 3,
    name: "your mom"
  }
];

const App = () => <List groceries={groceries} />;

export default App;
