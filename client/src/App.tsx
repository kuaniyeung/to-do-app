import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import { createClient } from "@supabase/supabase-js";
import Header from "./components/Header/Header";
import FilterButton from "./components/Buttons/FilterButton";
import AddTaskToggle from "./components/Buttons/AddTaskToggle";
import WeekdaysBar from "./components/WeekdaysBar";
import TaskContainer from "./components/Tasks/TaskContainer";
import AddTask from "./components/AddTask";
import { IsTask } from "./components/interface";
import LoadingSpinner from "./components/LoadingSpinner";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const today = DateTime.now().toISODate() || "";
const tomorrow = DateTime.now().plus({ days: 1 }).toISODate() || "";

const App: React.FC = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("active");
  const [activeTasks, setActiveTasks] = useState<IsTask[]>([]);
  const [tasksDueToday, setTasksDueToday] = useState<IsTask[]>([]);
  const [tasksDueTomorrow, setTasksDueTomorrow] = useState<IsTask[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetchActiveTasks();
    }, 500);
  }, []);

  // Fetch all active tasks
  const fetchActiveTasks = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("todos")
      .select()
      .eq("completed", false);

    if (data) {
      setActiveTasks(data);
    }

    if (error) {
      console.error("Error fetching data:", error);
    }

    setLoading(false);
  };

  // Fetch tasks that are due today
  const fetchTasksDueToday = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("todos")
      .select()
      .eq("completed", false)
      .eq("due_by", today);

    if (data) {
      setTasksDueToday(data);
    }

    if (error) {
      console.error("Error fetching data:", error);
    }

    setLoading(false);
  };

  // Fetch tasks that are due tomorrow
  const fetchTasksDueTomorrow = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("todos")
      .select()
      .eq("completed", false)
      .eq("due_by", tomorrow);

    if (data) {
      setTasksDueTomorrow(data);
    }

    if (error) {
      console.error("Error fetching data:", error);
    }

    setLoading(false);
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
      console.error("Error fetching data:", error);
    }

    setActiveTasks([...activeTasks, task]);
    setSelectedFilter("active");
    fetchActiveTasks();
  };

  // Update Task
  const updateTaskCompletion = async (id: number, updatedData: boolean) => {
    const { error } = await supabase
      .from("todos")
      .update({ completed: updatedData })
      .eq("id", id)
      .select();

    if (error) {
      console.error("Error fetching data:", error);
    }

    fetchActiveTasks();
  };

  // Delete Task

  const deleteTask = async (id: number) => {
    const { error } = await supabase.from("todos").delete().eq("id", id);

    if (error) {
      console.error("Error fetching data:", error);
    }

    fetchActiveTasks();
  };

  // Check filter

  const checkFilterForTasks = (): IsTask[] => {
    if (selectedFilter === "active") {
      return activeTasks || [];
    }
    if (selectedFilter === "today") {
      return tasksDueToday || [];
    }
    if (selectedFilter === "tomorrow") {
      return tasksDueTomorrow || [];
    }

    return [];
  };

  return (
    <>
      <div className="xl:flex xl:justify-center">
        <div className="m-5 mb-24 md:m-8 md:!mb-28 xl:w-full lg:m-12 xl:max-w-7xl">
          <Header />
          <div className="text-center">
            <FilterButton
              text={"active"}
              selectedFilter={selectedFilter}
              buttonColor={"primary"}
              onClick={() => {
                setSelectedFilter("active");
                fetchActiveTasks();
              }}
            />
            <FilterButton
              text={"today"}
              selectedFilter={selectedFilter}
              buttonColor={"secondary"}
              onClick={() => {
                setSelectedFilter("today");
                fetchTasksDueToday();
              }}
            />
            <FilterButton
              text={"tomorrow"}
              selectedFilter={selectedFilter}
              buttonColor={"accent"}
              onClick={() => {
                setSelectedFilter("tomorrow");
                fetchTasksDueTomorrow();
              }}
            />
          </div>
          <WeekdaysBar />

          {loading ? (
            <div className="flex justify-center h-screen mt-5">
              <LoadingSpinner />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4 ">
              <TaskContainer
                tasks={checkFilterForTasks()}
                onDelete={deleteTask}
                onComplete={updateTaskCompletion}
              />
            </div>
          )}

          <div className="fixed bottom-10 left-2/4 -translate-x-2/4 z-50">
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
      </div>
    </>
  );
};

export default App;
