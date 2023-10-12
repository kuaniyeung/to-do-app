import Greeting from "./Greeting";
import DayAndDate from "./DayAndDate";

const Header: React.FC = () => {
  return (
    <>
      <Greeting />
      <div className="flex justify-between my-3">
        <DayAndDate />
      </div>
    </>
  );
};

export default Header;
