import "./App.css";
import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import Header from "./components/Header/Header";
import ActiveButton from "./components/Buttons/ActiveButton";
import DoneButton from "./components/Buttons/DoneButton";
import AddNewTaskButton from "./components/Buttons/AddNewTaskButton";
import WeekdaysBar from "./components/WeekdaysBar";
import Tasks from "./components/Tasks/Tasks";
import { IsTask } from "./components/interface";
import AddNewTask from "./components/AddNewTask";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<IsTask[]>([
    {
      id: 1,
      title: "Do laundry",
      details: "Wash and dry laundry",
      isoDate: "2023-09-06T19:00:00.000Z",
      done: false,
    },
    {
      id: 2,
      title: "Call brother",
      details: "Ask him about picnic details",
      isoDate: "2023-10-01T10:00:00.000Z",
      done: false,
    },
    {
      id: 3,
      title: "Buy cream cheese",
      details: "Buy cream cheese for cheesecake",
      isoDate: "2023-08-24T12:00:00.000Z",
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
      <Header />
      <ActiveButton />
      <DoneButton />
      <WeekdaysBar />
      <Tasks tasks={tasks} />
      <AddNewTaskButton />
      <AddNewTask />
    </>
  );
};

export default App;
