import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";

// const App = () => {
//   const [selectedId, setSelectedId] = useState(1);
//   return (
//     <div>
//       <button onClick={() => setSelectedId(1)}>1</button>
//       <button onClick={() => setSelectedId(2)}>2</button>
//       <button onClick={() => setSelectedId(3)}>3</button>
//       <button onClick={() => setSelectedId(4)}>4</button>
//       <Todo id={selectedId} />
//     </div>
//   );
// };

// function Todo({ id }) {
//   const [todos, setTodos] = useState({});

//   useEffect(() => {
//     fetchData();
//   }, [todos]);

//   const fetchData = async () => {
//     const data = await fetch(`https://sum-server.100xdevs.com/todo?id=${id}`);
//     const json = await data.json();
//     setTodos(json.todo);
//   };

//   return (
//     <div>
//       <h1>{todos.title}</h1>
//       <h4>{todos.description}</h4>
//     </div>
//   );
// }

const App = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");

  let count = 0;
  for (let i = 1; i <= input; i++) {
    count += i;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter any number"
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />{" "}
      <br />
      Sum from 1 to {input} is {count}
      <br />
      <button onClick={() => setCounter(counter + 1)}>
        Counter ({counter})
      </button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(<App />);
