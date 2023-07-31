import { IsTask } from "../interface";

interface TaskProps {
  task: IsTask; 
}

const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{task.title}</h2>
          <p>{task.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
