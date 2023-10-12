import { DateTime } from "luxon";

const WeekdaysBar: React.FC = () => {
  const isActive = (weekday: string) => {
    const currDay: string = DateTime.now().toLocaleString({ weekday: "short" });
    return currDay === weekday;
  };

  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="text-center my-3 flex justify-between">
      {weekdays.map((weekday, index) => (
        <div
          key={index}
          className={
            isActive(weekday)
              ? "text-neutral-content"
              : "text-neutral"
          }
        >
          {weekday}
        </div>
      ))}
    </div>
  );
};

export default WeekdaysBar;
