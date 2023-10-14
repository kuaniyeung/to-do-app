import { IsTask } from "../interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import ConfirmationDialog from "../Dialogs/ConfirmationDialog";
import { useState } from "react";
interface TaskItemProps {
  onComplete: Function;
  onDelete: Function;
  indexOfTask: number;
  task: IsTask;
}

const TaskItem: React.FC<TaskItemProps> = ({
  indexOfTask,
  task,
  onComplete,
  onDelete,
}) => {
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

  const [confirmationDialogIsOpen, setConfirmationDialogIsOpen] =
    useState<boolean>(false);

  const [confirmationDialogAction, setConfirmationDialogAction] =
    useState<Function>(() => {});

  const [confirmationDialogText, setConfirmationDialogText] =
    useState<string>("");

  const handleActionClick = (action: boolean) => {
    setConfirmationDialogIsOpen(action);
  };

  const handleConfirmDelete = () => {
    return () => {
      onDelete(task.id);
      setConfirmationDialogIsOpen(false);
    };
  };

  const handleConfirmTaskCompletion = () => {
    return () => {
      onComplete(task.id, true);
      setConfirmationDialogIsOpen(false);
    };
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
                  <a
                    onClick={() => {
                      setConfirmationDialogText(
                        "Are you sure you want to delete this task?"
                      );
                      setConfirmationDialogAction(handleConfirmDelete);
                      handleActionClick(true);
                    }}
                    className="text-white"
                  >
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between">
            <p>{task.details}</p>
            <div className="flex flex-col items-center card-actions justify-end ml-4">

              {/* Click to complete */}
              <button
                className="btn btn-circle"
                onClick={() => {
                  setConfirmationDialogText(
                    "Are you sure you have completed this task?"
                  );
                  setConfirmationDialogAction(handleConfirmTaskCompletion);
                  handleActionClick(true);
                }}
              >
                <FontAwesomeIcon icon={faCheck} />
              </button>
            </div>
          </div>
        </div>

        {/* Confirmation Dialog */}
        <ConfirmationDialog
          isOpen={confirmationDialogIsOpen}
          onConfirm={confirmationDialogAction}
          onCancel={() => handleActionClick(false)}
          text={confirmationDialogText}
        />
      </div>
    </>
  );
};

export default TaskItem;
