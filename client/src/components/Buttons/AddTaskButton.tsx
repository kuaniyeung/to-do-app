import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddTaskButton: React.FC = () => {
  return (
    <button className="btn btn-circle btn-accent">
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
};

export default AddTaskButton;
