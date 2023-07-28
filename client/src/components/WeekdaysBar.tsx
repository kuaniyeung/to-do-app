import { DateTime } from "luxon";

const WeekdaysBar: React.FC = () => {
  const isActive = (weekday: string) => {
    const currDay: string = DateTime.now().toLocaleString({ weekday: "short" });
    return currDay === weekday;
  };

  const weekdays = [
    { id: 1, name: "Mon" },
    { id: 2, name: "Tue" },
    { id: 3, name: "Wed" },
    { id: 4, name: "Thu" },
    { id: 5, name: "Fri" },
    { id: 6, name: "Sat" },
    { id: 7, name: "Sun" },
  ];

  return (
    <div>
      {weekdays.map((weekday) => (
        <button
          key={weekday.id}
          className={
            isActive(weekday.name) ? "text-neutral-content" : "text-neutral"
          }
        >
          {weekday.name}
        </button>
      ))}
    </div>
  );
};

export default WeekdaysBar;
