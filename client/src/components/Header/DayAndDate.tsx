import { DateTime } from "luxon";

const DayAndDate: React.FC = () => {
  const today = DateTime.now().setLocale("en-US");

  const currDay: string = today.toLocaleString({ weekday: "long" });

  const currDate: string = today.toLocaleString({
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <div>
        <div>Today's {currDay}</div>
        <div>{currDate}</div>
      </div>
    </>
  );
};

export default DayAndDate;
