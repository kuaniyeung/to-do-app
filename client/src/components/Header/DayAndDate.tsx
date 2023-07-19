import { DateTime } from "luxon";

function DayAndDate() {
  const today = DateTime.now().setLocale("en-US");

  const currDay: string = today.toLocaleString({ weekday: "long" });

  const currDate: string = today.toLocaleString({
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <span>Today's {currDay}</span>
      <span>{currDate}</span>
    </>
  );
}

export default DayAndDate;
