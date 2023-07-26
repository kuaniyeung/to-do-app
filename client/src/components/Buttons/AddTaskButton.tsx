import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function AddTaskButton() {
  return (
    <button className="btn btn-circle btn-accent">
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
}

export default AddTaskButton;
