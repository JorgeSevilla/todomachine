import React from "react";
import "../App/App.css";
import { AppUI } from "./AppUI";
import { TodoProvider } from '../TodoContext/index';

/*const defaultTodos=[
  {text: "Primera línea", completed: true}, 
  {text: "Segunda línea", completed: false},
  {text: "Tercera línea", completed: true},
  {text: "Cuarta línea", completed: false}
];*/

function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
