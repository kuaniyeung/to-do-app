import { IsTask } from "../interface";
import TaskItem from "./TaskItem";


interface TasksProps {
  onComplete: Function;
  onDelete: Function;
  tasks: IsTask[];
}

const TaskContainer: React.FC<TasksProps> = ({
  tasks,
  onComplete,
  onDelete,
}) => {
  const uncompletedTasks = tasks.filter((task) => task.completed === false);
  return (
    <>
      {uncompletedTasks.map((task, index) => (
        <TaskItem
          key={task.id}
          task={task}
          indexOfTask={index}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
      
    </>
  );
};

export default TaskContainer;
