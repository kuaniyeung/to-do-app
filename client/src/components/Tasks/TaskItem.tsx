import { IsTask } from "../interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

interface TaskItemProps {
  indexOfTask: number;
  onDelete: Function;
  task: IsTask;
}

const TaskItem: React.FC<TaskItemProps> = ({ indexOfTask, task, onDelete }) => {
  const getTaskItemClasses = () => {
    const index: number = indexOfTask + 1;
    let classes = "card shadow-xl rounded-3xl";

    if (index % 3 === 1) {
      return (classes += " bg-primary text-primary-content");
    }

    if (index % 3 === 2) {
      return (classes += " bg-secondary text-secondary-content");
    }

    return (classes += " bg-accent text-accent-content");
  };

  return (
    <>
      <div className={getTaskItemClasses()}>
        <div className="card-body p-5">
          <div className="flex justify-between">
            <h2 className="card-title">{task.title}</h2>
            <div className="dropdown dropdown-end">
              <button className="btn btn-sm btn-circle btn-ghost">
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-22"
              >
                <li>
                  <a onClick={() => onDelete(task.id)} className="text-white">
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between">
            <p>{task.details}</p>
            <div className="flex flex-col items-center card-actions justify-end ml-4">
              <div className="whitespace-nowrap">1h 20m</div>
              <button className="btn btn-circle">
                <FontAwesomeIcon icon={faCheck} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskItem;
