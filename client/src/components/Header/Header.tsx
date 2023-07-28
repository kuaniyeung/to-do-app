import Greeting from "./Greeting";
import DayAndDate from "./DayAndDate";
import TaskDone from "./TaskDone";

const Header: React.FC = () => {
  return (
    <>
      <Greeting />
      <DayAndDate />
      <TaskDone />
    </>
  );
};

export default Header;
