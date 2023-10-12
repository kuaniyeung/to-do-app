import { MouseEvent } from "react";

interface FilterButtonProps {
  text: string;
  selectedFilter: string;
  buttonColor: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  text,
  selectedFilter,
  buttonColor,
  onClick,
}) => {
  const getFilterButtonClasses = () => {
    let classes = `btn btn-${buttonColor} rounded-full w-1/3 `;

    if (text === selectedFilter) {
      return (classes += "btn-active text-base-content");
    }

    return (classes += "btn-outline");
  };

  return (
    <button onClick={onClick} className={getFilterButtonClasses()}>
      {text}
    </button>
  );
};

export default FilterButton;
