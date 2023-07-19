import Greeting from "./Greeting";
import DayAndDate from "./DayAndDate";
import TaskDone from "./TaskDone";

function Header() {
  return (
    <>
      <Greeting />
      <DayAndDate />
      <TaskDone />
    </>
  );
}

export default Header;
