import "./App.css";
import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import { createClient } from "@supabase/supabase-js";
import Header from "./components/Header/Header";
import ActiveButton from "./components/Buttons/ActiveButton";
import DoneButton from "./components/Buttons/DoneButton";
import AddTaskToggle from "./components/Buttons/AddTaskToggle";
import WeekdaysBar from "./components/WeekdaysBar";
import TaskContainer from "./components/Tasks/TaskContainer";
import { IsTask } from "./components/interface";
import AddTask from "./components/AddTask";

const supabaseUrl = "https://wxgbteupvrwxxgdgbgoa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4Z2J0ZXVwdnJ3eHhnZGdiZ29hIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5Mjc0MDg1MCwiZXhwIjoyMDA4MzE2ODUwfQ.RbiQ94RSkL4uWJfWXNBzz7JyKoAiuzG0ukPERUkBSUE";
const supabase = createClient(supabaseUrl, supabaseKey);

const today = DateTime.now().toFormat("yyyy-MM-dd");

const App: React.FC = () => {
  const [showAddTask, setShowAddTask] = useState<boolean>(false);
  const [tasks, setTasks] = useState<IsTask[]>([]);

  useEffect(() => {
    fetchTasks();
  }, [tasks]);

  // Fetch Tasks
  const fetchTasks = async () => {
    const { data, error } = await supabase.from("todos").select();
    if (data) {
      setTasks(data);
    }

    if (error) {
      console.error(error);
    }
  };

  // Fetch Task
  const fetchTask = async (id: number) => {
    const { data, error } = await supabase.from("todos").select().eq("id", id);
    console.log(data);

    if (error) {
      console.error(error);
    }
  };

  // Add Task
  const addTask = async (task: IsTask) => {
    const { error } = await supabase
      .from("todos")
      .insert([
        {
          created_on: today,
          title: task.title,
          details: task.details,
          due_by: task.due_by,
          completed: false,
        },
      ])
      .select();

    if (error) {
      console.error(error);
    }

    setTasks([...tasks, task]);
  };

  // Delete Task

  const deleteTask = async (id: number) => {
    const { error } = await supabase.from("todos").delete().eq("id", id);

    if (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="m-5 mb-24">
        <Header />
        <div className="text-center">
          <ActiveButton />
          <DoneButton />
        </div>
        <WeekdaysBar />
        <TaskContainer tasks={tasks} onDelete={deleteTask} />
        <div className="fixed bottom-5 left-2/4 -translate-x-2/4 z-50">
          <AddTaskToggle
            onClick={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask}
          />
        </div>
        {showAddTask && <AddTask onAdd={addTask} />}
      </div>
    </>
  );
};

export default App;
