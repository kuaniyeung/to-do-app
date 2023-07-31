import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import "./App.css";
import Header from "./components/Header/Header";
import ActiveButton from "./components/Buttons/ActiveButton";
import DoneButton from "./components/Buttons/DoneButton";
import AddTaskButton from "./components/Buttons/AddTaskButton";
import WeekdaysBar from "./components/WeekdaysBar";
import Tasks from "./components/Tasks/Tasks";
import DateAndTimePicker from "./components/AddNewTask/DateAndTimePicker";
import { IsTask } from "./components/interface";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<IsTask[]>([
    {
      id: 1,
      title: "Do laundry",
      description: "Wash and dry laundry",
      isoDate: "2023-09-06T19:00:00.000Z",
      done: false,
    },
    {
      id: 2,
      title: "Call brother",
      description: "Ask him about picnic details",
      isoDate: "2023-10-01T10:00:00.000Z",
      done: false,
    },
    {
      id: 3,
      title: "Buy cream cheese",
      description: "Buy cream cheese for cheesecake",
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

  const handleDateChange = (selectedDate: Date) => {
    console.log("Selected date:", selectedDate); // Selected date: Mon Jul 24 2023 12:00:00 GMT-0400 (Eastern Daylight Time)
    console.log("Selected date:", selectedDate.toISOString()); // Selected date: 2023-07-24T16:00:00.000Z
  };

  return (
    <>
      <AddTaskButton />
      <Header />
      <ActiveButton />
      <DoneButton />
      <WeekdaysBar />
      <Tasks tasks={tasks} />
      <DateAndTimePicker onDateChange={handleDateChange} />
    </>
  );
};

export default App;
