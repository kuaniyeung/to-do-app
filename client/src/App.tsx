import "./App.css";
import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import { createClient } from "@supabase/supabase-js";
import Header from "./components/Header/Header";
import TodayTomorrowButton from "./components/Buttons/TodayTomorrowButton";
import AddTaskToggle from "./components/Buttons/AddTaskToggle";
import WeekdaysBar from "./components/WeekdaysBar";
import TaskContainer from "./components/Tasks/TaskContainer";
import AddTask from "./components/AddTask";
import ConfirmationDialog from "./components/ConfirmationDialog/ConfirmationDialog";
import {
  DialogProviders,
  useConfirmationDialogText,
  useConfirmationDialogIsOpen,
  useConfirmationDialogAction,
} from "./components/ConfirmationDialog/ConfirmationDialogContext";
import { IsTask } from "./components/interface";

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
    // const { data, error } = await supabase.from("todos").select().eq("completed", completion);
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

  // Update Task
  const updateTaskCompletion = async (id: number, updatedData: boolean) => {
    const { error } = await supabase
      .from("todos")
      .update({ completed: updatedData })
      .eq("id", id)
      .select();

    if (error) {
      console.error(error);
    }
  };

  // Delete Task

  const deleteTask = async (id: number) => {
    const { error } = await supabase.from("todos").delete().eq("id", id);

    if (error) {
      console.error(error);
    }
  };

  // Confirmation Dialog

  const { confirmationDialogText } = useConfirmationDialogText();
  const { confirmationDialogIsOpen, setConfirmationDialogIsOpen } =
    useConfirmationDialogIsOpen();
  const { confirmationDialogAction } = useConfirmationDialogAction();

  return (
    <>
      <div className="m-5 mb-24">
        <Header />
        <div className="text-center">
          <TodayTomorrowButton text={"today"} buttonColor={"secondary"} />
          <TodayTomorrowButton text={"tomorrow"} buttonColor={"accent"} />
        </div>
        <WeekdaysBar />

        <TaskContainer
          tasks={tasks}
          onComplete={updateTaskCompletion}
          onDelete={deleteTask}
        />

        {/* Confirmation Dialog */}
        <ConfirmationDialog
          isOpen={confirmationDialogIsOpen}
          onConfirm={confirmationDialogAction}
          onCancel={setConfirmationDialogIsOpen(false)}
          text={confirmationDialogText}
        />

        <div className="fixed bottom-5 left-2/4 -translate-x-2/4 z-50">
          <AddTaskToggle
            onClick={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask}
          />
        </div>
        {showAddTask && (
          <AddTask
            onAdd={addTask}
            closeAdd={() => setShowAddTask(!showAddTask)}
          />
        )}
      </div>
    </>
  );
};

export default App;
