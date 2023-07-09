import React, { useState } from "react";
import "./App.css";
import { List } from "./Components/List";
import InputFields from "./Components/InputFields";
export interface IState {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Mohit",
      url: "https://cdn.pixabay.com/photo/2020/11/27/22/07/naruto-5783102_640.png",
      age: 22,
      note: "Hello World",
    }
  ]);
  return (
    <div className="App">
      <h1>People Invited to my party</h1>
      <List people={people} />
      <InputFields people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
