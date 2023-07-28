import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ActiveButton from "./components/Buttons/ActiveButton";
import DoneButton from "./components/Buttons/DoneButton";
import AddTaskButton from "./components/Buttons/AddTaskButton";
import WeekdaysBar from "./components/WeekdaysBar";
import Tasks from "./components/Tasks/Tasks";
import DateAndTimePicker from "./components/AddNewTask/DateAndTimePicker";

const App: React.FC = () => {
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
      <Tasks />
      <DateAndTimePicker onDateChange={handleDateChange} />
    </>
  );
};

export default App;
