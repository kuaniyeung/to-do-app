import { IsTask } from "../interface";
import Task from "./Task";

interface TasksProps {
  tasks: IsTask[];
}

const Tasks: React.FC<TasksProps> = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <Task task={task} />
        </div>
      ))}
    </div>
  );
};

export default Tasks;
