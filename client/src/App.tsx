import "./App.css";
import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import { createClient } from "@supabase/supabase-js";
import Header from "./components/Header/Header";
import ActiveButton from "./components/Buttons/ActiveButton";
import DoneButton from "./components/Buttons/DoneButton";
import AddTaskButton from "./components/Buttons/AddTaskButton";
import WeekdaysBar from "./components/WeekdaysBar";
import Tasks from "./components/Tasks/Tasks";
import { IsTask } from "./components/interface";
import AddTask from "./components/AddTask";

const supabaseUrl = "https://wxgbteupvrwxxgdgbgoa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4Z2J0ZXVwdnJ3eHhnZGdiZ29hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI3NDA4NTAsImV4cCI6MjAwODMxNjg1MH0.wHLHR8gKUxhuVqkynliRHo_cq_q29feVEu0K1Qpp8NA";
const supabase = createClient(supabaseUrl, supabaseKey);

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
      <AddTaskButton />
      <AddTask />
    </>
  );
};

export default App;
