import { DateTime } from "luxon";

const Greeting: React.FC = () => {
  const getGreeting = () => {
    const currTime = DateTime.now().hour;

    if (currTime >= 5 && currTime < 12) return "Morning";
    if (currTime >= 12 && currTime < 18) return "Afternoon";
    return "Evening";
  };

  return (
    <h1 className="text-7xl md:text-8xl text-primary">
      Good <br className="lg:hidden" />
      {getGreeting()}
    </h1>
  );
};

export default Greeting;
