import { DateTime } from "luxon";

const WeekdaysBar: React.FC = () => {
  const isActive = (weekday: string) => {
    const currDay: string = DateTime.now().toLocaleString({ weekday: "short" });
    return currDay === weekday;
  };

  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div>
      {weekdays.map((weekday, index) => (
        <button
          key={index}
          className={
            isActive(weekday) ? "text-neutral-content" : "text-neutral"
          }
        >
          {weekday}
        </button>
      ))}
    </div>
  );
};

export default WeekdaysBar;
