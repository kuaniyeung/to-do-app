import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function getTasks() {
      const tasksFromDB = await fetchTasks();

      setTasks(tasksFromDB);
    }

    getTasks();
  }, []);

  // Fetch Tasks
  async function fetchTasks() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();

    return data;
  }

  console.log(tasks);
  return (
    <>
      <Header />
    </>
  );
}

export default App;
