import { IsTask } from "../interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface TaskProps {
  task: IsTask; 
}

const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{task.title}</h2>
          <p>{task.details}</p>
          <div className="card-actions justify-end">
            <div>1h 20m</div>
            <button className="btn btn-circle">
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
