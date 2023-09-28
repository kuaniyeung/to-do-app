import { IsTask } from "../interface";
import TaskItem from "./TaskItem";

interface TasksProps {
  onDelete: Function;
  tasks: IsTask[];
}

const TaskContainer: React.FC<TasksProps> = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          indexOfTask={index}
        />
      ))}
    </>
  );
};

export default TaskContainer;
