import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { MouseEvent } from "react";

interface AddTaskToggleProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  showAdd: boolean
}

const AddTaskToggle: React.FC<AddTaskToggleProps> = ({onClick, showAdd}) => {
  const getAddTaskToggleClasses = () => {
    let classes = "btn btn-circle btn-lg text-2xl";

    if (showAdd) {
      return classes += " btn-neutral-focus btn-outline";
    }

    return (classes += " btn-info");
  }

  return (
    <button className={getAddTaskToggleClasses()} onClick={onClick}>
      <FontAwesomeIcon icon={showAdd ? faXmark : faPlus} />
    </button>
  );
};

export default AddTaskToggle;
