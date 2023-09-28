import Greeting from "./Greeting";
import DayAndDate from "./DayAndDate";
import TaskDone from "./TaskDone";

const Header: React.FC = () => {
  return (
    <>
      <Greeting />
      <div className="flex justify-between my-3">
        <DayAndDate />
        <TaskDone />
      </div>
    </>
  );
};

export default Header;
