import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="w-16 h-16 text-info animate-spin">
      <FontAwesomeIcon icon={faSpinner} size="3x" />
    </div>
  );
};

export default LoadingSpinner;
