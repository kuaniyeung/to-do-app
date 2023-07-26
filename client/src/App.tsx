import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ActiveButton from "./components/Buttons/ActiveButton";
import DoneButton from "./components/Buttons/DoneButton";
import AddTaskButton from "./components/Buttons/AddTaskButton";
import WeekdaysBar from "./components/WeekdaysBar";
import Tasks from "./components/Tasks/Tasks";
import AddNewTask from "./components/AddNewTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Do laundry",
      description: "Wash and dry laundry",
      date: "September 6, 2023",
      day: "Wednesday",
      time: "7:00 PM",
      done: false,
    },
    {
      id: 2,
      title: "Call brother",
      description: "Ask him about picnic details",
      date: "October 1, 2023",
      day: "Sunday",
      time: "10:00 AM",
      done: false,
    },
    {
      id: 3,
      title: "Buy cream cheese",
      description: "Buy cream cheese for cheesecake",
      date: "August 24, 2023",
      day: "Thursday",
      time: "12:00 PM",
      done: false,
    },
  ]);

  /*   useEffect(() => {
    const getTasks = async () => {
      const tasksFromDB = await fetchTasks();

      setTasks(tasksFromDB);
    };

    getTasks();
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();

    return data;
  }; */

  return (
    <>
      <AddTaskButton />
      <Header />
      <ActiveButton />
      <DoneButton />
      <WeekdaysBar />
      <Tasks />
      <AddNewTask />
    </>
  );
}

export default App;
